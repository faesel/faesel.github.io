import React from "react"
import RelatedArticle from "./relatedArticle"
import relatedArticlesStyle from "./relatedArticles.module.scss"

const RelatedArticles = ({ relatedArticles }) => {
  return (
    <div className={relatedArticlesStyle.boxlist}>
      {relatedArticles.map((article, index) => (
        <RelatedArticle
          key={index}
          url={article.url}
          heroImageAlt={article.imageAlt}
          heroImageUrl={article.imageUrl}
          title={article.title}
        ></RelatedArticle>
      ))}
    </div>
  )
}

export default RelatedArticles
