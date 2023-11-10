import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import '../DetailedArticle/detailedarticle.css';
import 'bootstrap'
import RecentPosts from './RecentPosts';

const DetailedArticle = () => {

    const [article, setArticle] = useState({})
    const { id } = useParams()
  
    useEffect(() =>  {
      getArticle()
    },[])
    
  
    const getArticle = async () => {
      if(id !== undefined) {
      const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
      
      if (result.status === 200){
        setArticle(await result.json())
        console.log(result)
        console.log(article)
      }
  
        else{
        console.log("misslyckat")
        }
    }
  }
  const inputDate= `${article.published}`;
  const date=new Date(inputDate);
  const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const month= monthNamesShort[date.getMonth()];
  const day= date.getDate();
  const year= date.getFullYear();

  const presentableDate= `${month} ${day} , ${year}`;


  return (
    <section>
      <div className="container news">
    <div className="container-details">
            <h2>{article.title}</h2>
            <div className="news-info">
            <p >{presentableDate}<i className="fa-solid fa-period dot"></i></p>
            
            <p >{article.category} <i className="fa-solid fa-period dot"></i></p>
           
            <p>{article.author}</p>
      </div>
      <img src= {article.imageUrl} className="img" alt="article picture"/>
      <div className="fixed-text"><p className="generic"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br/>  Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br/><br/>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br/><br/>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br/><br/>
                            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
        </p>
        <div className="inside">
        <icon className="marks"><i className="fa-solid fa-quote-left fa-flip-vertical"></i></icon>
      <p className="quote">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna
      </p>
      </div>
      <p className="generic">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc<br/> viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
      </p>
      </div>
      </div>
      <div className="rightside">
        <form className="search">
          <div className="search-container">
          <input type="text" placeholder="Type to search..."/> 
          <i className="fa-solid fa-magnifying-glass"></i>
          
         </div>
        </form>
        <article className="recent">
          <h3 className="posttitle">Recent posts</h3>
          <div className="emptybox"></div>
          <RecentPosts  title="How To Blow Through Capital At An Incredible Rate"
                        date="Jan 14, 2020"
                        />
          <RecentPosts  title="Design Studios That Everyone Should Know About? "
                        date="Jan 14, 2020"
                        />
          <RecentPosts  title="How did we get 1M+ visitors in 30 days without anything!"
                        date="Jan 14, 2020"
                        />
          <RecentPosts  title="Figma On Figma: How We Built Our Website Design System"
                        date="Jan 14, 2020"
                        />
        </article>
        

      </div>
    </div>
    </section>
  )
}

export default DetailedArticle