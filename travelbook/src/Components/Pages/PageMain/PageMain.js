
import PostsTest from '../../Elements/PostsTest';
import Menu from './Menu';
function PageMain (){

    const listeArticles= [{'title':'Article1','details':'Un paragraphe est une section de texte en prose vouée au développement'},{'title':'Article2','details':'Un paragraphe est une section de texte en prose vouée au développement',},{'title':'Article3','details':'Un paragraphe est une section de texte en prose vouée au développement',}]

    return(
        <div>
 

        <Menu/>

        <h2>Page principale</h2>


        {
    listeArticles.map(article => {

        return(<PostsTest title={article.title} details={article.details} />)
    }


        )

    }


        </div>

    )


}



export default PageMain;