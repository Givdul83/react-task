import React from 'react'

const Article = ({author, category, content, id, imageUrl, published, title}) => {

    const publishedDate = new Date(published);
    const day= publishedDate.getDate();
    const month =publishedDate.toLocaleString('default', {month: 'short'});

  return (
    <article className="newsbox">
           <div id={id}>
                <img className="img" src={imageUrl} />
                <article className="date-box">
                    <h4>{day}</h4>
                    <p>{month}</p>
                
                </article>
                <p className="author hidden">{author}</p>
                <p className= "date hidden">{published}</p>
                <p className="category">{category}</p>
                <h3>{title}</h3>
                <p className="content">{content}</p>
            </div>
    </article>
    
  )
}

export default Article



/*author
: 
"Anna Karlsson"
category
: 
"Företag"
content
: 
"Agil projektledning fortsätter att vara en viktig del av framgångsrika företags strategier..."
id
: 
"9a686f0a-8397-41c2-8adb-bd731eea59ac"
imageUrl
: 
"https://win23assignimg.blob.core.windows.net/images/annie-spratt-FSFfEQkd1sc-unsplash-min.jpg"
published
: 
"2023-10-17T00:00:00"
title
: 
"Agil projektledning i moderna organisationer"*/