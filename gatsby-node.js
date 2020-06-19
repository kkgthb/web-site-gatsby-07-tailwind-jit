const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const urlSuffixIdea = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `suggestedURLSuffix`,
      value: urlSuffixIdea,
    })
  }
}

exports.createPages = async ({ graphql, getNode, actions }) => {
  const { createPage } = actions
  const queryResult = await graphql(`
	query {
	  allMarkdownRemark {
		  edges {
			node {
			  id,
			  fields {
				suggestedURLSuffix
			  }
			}
		  }
	  }
	}
  `)
  nodes = queryResult.data.allMarkdownRemark.edges
  nodes.forEach(({ node }) => {
	const freshNode = getNode(node.id);
    createPage({
	  path: node.fields.suggestedURLSuffix,
	  component: path.resolve(`./src/templates/${freshNode.frontmatter.template}.js`),
	  context: {
	    frontmatter: freshNode.frontmatter,
	  },
    })
  })
};