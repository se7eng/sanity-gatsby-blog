export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60930b24903a402fe4de08d0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-o7hn17n9",
                  apiId: "b0657ab2-2e46-45a1-9813-8815e66542b4",
                },
                {
                  buildHookId: "60930b24c2719321c444e552",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-zwvx6twr",
                  apiId: "98367682-a814-4930-8294-9d2485c6c2b0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/se7eng/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-zwvx6twr.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
