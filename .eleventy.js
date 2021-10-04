const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  const md = new markdownIt({
    html: true,
  });

  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/pdf");
    eleventyConfig.addPassthroughCopy("src/admin");

    eleventyConfig.addCollection("nav", function(collection) {
      let pages = collection.getFilteredByTag("nav");
      return pages.sort(function (a,b) {
        return a.data.weight - b.data.weight;
      })
    })

    return {
      dir: {
        input: "src"
      }
    };
  };

  