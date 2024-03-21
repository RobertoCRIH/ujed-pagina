import { CiFacebook } from "react-icons/ci";
import { FacebookShareButton , TwitterShareButton } from "react-share";
import { FaSquareXTwitter } from "react-icons/fa6";




function NoticiasBanner({imageBg,title}) {
    const currentUrl =window.location.href;
    return(
        <div className="noticiasBanner" style={{backgroundImage:`url(${imageBg})`}}>
            <div className="noticiasBanner__container">
                <h1>
                    {title}
                </h1>
                <p className="fecha">23 de Marzo 2024</p>
                <div className="shareButtons">
                    <FacebookShareButton
                    url={currentUrl}
                    hashtag="#UJED #Durango"
                    >
                        <CiFacebook className="shareBttn"/>
                    </FacebookShareButton>
                        
                    <TwitterShareButton
                    url={currentUrl}
                    hashtags={["UJED","Durango"]}
                    title={title}
                    related={["@UJED_Oficial"]}
                    >
                        <FaSquareXTwitter className="shareBttn"/>
                    </TwitterShareButton>
                </div>
            </div>
        </div>
    )
}

export default NoticiasBanner;