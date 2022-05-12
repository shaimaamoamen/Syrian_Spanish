import React from "react";
import {TypesSection,TypesTitle,Div,ImageWrapper,Image,Overlay,OverlaySpan,Cont} from './style.js'
const Types=()=>{
    
    return(
        <TypesSection>
            <TypesTitle>
                Types
            </TypesTitle>
            
            <Cont>
            <Div>
               Estrella transparent glycerin soap with natural oils extracts
            </Div>
            <ImageWrapper>
                <Image src="images/lavender.jpg" height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Lavender
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src="images/jojoba.jpg" />
                <Overlay>
                    <OverlaySpan>
                        Jojoba
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src="images/avacado.jpg " height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Avacado
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src="images/olivera.jpg" height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Olivera
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src="images/chamomile.jpg" height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Chamomile
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            </Cont>
        </TypesSection>
    )
}
export default Types;