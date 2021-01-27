import React from 'react'
import relatedArticleStyle from './relatedArticle.module.scss'

const RelatedArticle = ({ title, url, heroImageUrl, heroImageAlt }) => {
    
    return (
       <div className={relatedArticleStyle.box}>
           <a href={url}>
                <img className={relatedArticleStyle.boximage} height={100} width={200} src={heroImageUrl} alt={heroImageAlt}></img>
                <p className={relatedArticleStyle.title}>{title}</p>
           </a>
       </div>
    )
}

export default RelatedArticle