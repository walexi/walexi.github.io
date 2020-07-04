const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.jsx');
    const tagPage = path.resolve('src/pages/tags.jsx');
    const tagPosts = path.resolve('src/templates/tag.jsx');
    const project_dir = path.resolve('src/projects');

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              filter: { fileAbsolutePath: {regex : "/projects|posts/"}}
              sort: { order: ASC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                  }
                  fileAbsolutePath
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return reject(result.errors);
        } 

        const pages = result.data.allMarkdownRemark.edges;

        // const pagesByTag = {};
        // // create tags page
        // pages.forEach(({ node }) => {
        //   if (node.frontmatter.tags) {
        //     node.frontmatter.tags.forEach(tag => {
        //       if (!pagesByTag[tag]) {
        //         pagesByTag[tag] = [];
        //       }

        //       pagesByTag[tag].push(node);
        //     });
        //   }
        // });

        // const tags = Object.keys(pagesByTag);

        // createPage({
        //   path: '/tags',
        //   component: tagPage,
        //   context: {
        //     tags: tags.sort(),
        //   },
        // });

        // //create tags
        // tags.forEach(tagName => {
        //     const pages = pagesByTag[tagName];

        //     createPage({
        //       path: `/tags/${tagName}`,
        //       component: tagPosts,
        //       context: {
        //         pages,
        //         tagName,
        //       },
        //     });
        // });

        //create posts
        pages.forEach(({ node }, index) => {
          if(node.frontmatter.path) {
            const path = node.frontmatter.path;
            const prev = index === 0 ? null : pages[index - 1].node;
            const type = node.fileAbsolutePath.split('/').slice(-3,-2)[0]
            console.log(type)
            const next =
              index === pages.length - 1 ? null : pages[index + 1].node;
            createPage({
              path,
              component: type=="posts" ? postTemplate : project_dir + path +".jsx",
              context: {
                pathSlug: path,
                prev,
                next,
              },
            });
          }
        });
      })
    );
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
