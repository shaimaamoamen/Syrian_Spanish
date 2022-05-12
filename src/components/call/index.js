import React,{Component} from "react";
import{CallSection,CallData,Icon,CallDesc,SpanInfo,SpanTitle} from './style.js'
class Call extends Component{
    render(){
        return(
            <CallSection>
            <CallData item="1">
            <Icon src="images/facebook.png" />
            <CallDesc>
                <SpanInfo>Mohammed Moamen</SpanInfo>
                <SpanTitle>SOCIAL FACEBOOK</SpanTitle>
            </CallDesc>
           </CallData>
           <CallData item="2">
            <Icon src="images/call2.png" />
            <CallDesc>
                <SpanInfo>01206304060</SpanInfo>
                <SpanTitle>Mobile</SpanTitle>
            </CallDesc>
        </CallData>
            </CallSection>
        )
    }
}
export default Call;