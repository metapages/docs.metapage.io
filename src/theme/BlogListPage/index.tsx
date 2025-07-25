import BlogLayout from "@theme/BlogLayout";
import { useEffect } from "react";
import { Props } from "@theme/BlogLayout"; // not needed anymore
// import BlogListPaginator from '@theme/BlogListPaginator'; // optional

export default function BlogListPage(props: Props) {
  const { sidebar } = props;

  useEffect(() => {
    document.body.classList.add("custom-blog-list-page");
    return () => {
      document.body.classList.remove("custom-blog-list-page");
    };
  }, []);

  // Group sidebar items by year
  const itemsByYear = sidebar.items.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    acc[year] = acc[year] || [];
    acc[year].push(item);
    return acc;
  }, {});

  const sortedYears = Object.keys(itemsByYear).sort(
    (a, b) => Number(b) - Number(a)
  ); // most recent year first
  Object.keys(itemsByYear).forEach((year) => {
    itemsByYear[year].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  });

  return (
    <BlogLayout sidebar={null}>
      <div style={{ maxWidth: "60em", margin: "0 auto", padding: "2rem" }}>
        <aside
          style={{
            width: "40em",
            margin: "0 auto",
            borderLeft: "4px solid #eee",
            paddingLeft: "1rem",
          }}
        >
          {sidebar.title && <h3>{sidebar.title}</h3>}

          {sortedYears.map((year) => (
            <div key={year}>
              <h4>{year}</h4>
              <ul>
                {itemsByYear[year].map((item) => (
                  <li key={item.permalink}>
                    <a href={item.permalink}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      </div>
    </BlogLayout>
  );
}
