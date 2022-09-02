import React from "react";
import {TypesSection,Div,ImageWrapper,Image,Overlay,OverlaySpan,Cont} from './style.js'
const Types=()=>{
    
    return(
        <TypesSection>
            <Cont>
            <Div>
               Estrella transparent glycerin soap with natural oils extracts
            </Div>
            <ImageWrapper>
                <Image src="images/6.jpeg" height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Lavender
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src="images/4.jpeg" height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Jojoba
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src="images/8.jpeg " height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Avacado
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src="images/7.jpeg" height="194px" />
                <Overlay>
                    <OverlaySpan>
                        Olivera
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
            <ImageWrapper>
                <Image src="images/3.jpeg" height="194px" />
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