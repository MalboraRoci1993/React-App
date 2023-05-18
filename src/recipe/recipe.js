export function Recipes(props) {
    return (
    <td style={{border: `2px solid ${props.cardBorderColor ? props.cardBorderColor : props.defaultCardBorderColor}`,
    backgroundColor: `${props.bodyBackgroundColor ? props.bodyBackgroundColor : props.defaultBodyBackgroundColor}`
    
    }}>
        <table align='center' width='280' className='recipecard'  key={props.id} >

                                
                        <tr>
                            <td>
                                <a href={props.recipeFullUrl} style={{ textDecoration: "none", color: "#91c11e" }}>
                                    <img src={props.recipe_img}
                                        style={{ width: "285px", height: "185px", margin: "0px", padding: "0px", display: "block" }} />

                                </a>
                            </td>
                        </tr>
                      
                        {props.recipe_label && props.recipe_label.length > 0 && (
                       <tr>
                       <td style={{padding: '0 0 10px 5px'}}>
                           <div style={{ margin: '0 auto'}}>
                               <table style={{  borderCollapse: 'collapse',borderSpacing: 0,WebkitTextSizeAdjust: 'none'}} 
                               border="0" cellpadding="0" cellspacing="0">
                                 <tr><td style={{fontWeight: 600,fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
                                               textTransform: 'uppercase',lineHeight: '19px',paddingLeft: '4px',paddingRight: '4px',backgroundColor: '#f0aa4a',
                                               fontSize: '12px',color: '#fff',borderRadius: '4px',display: 'inline'}}>
                                         HALL OF FAME</td>
                                     <td><img src="https://i.postimg.cc/fTvBtSXZ/about-us.png" 
                                              style={{width: '20px',height: '20px',verticalAlign: 'middle',display: 'inline'}} 
                                              height="20" width="20"/>
                                   </td>
                                   </tr>
                               </table>
                           </div>
                       </td>
                   </tr>
                    )}
                    {(!props.recipe_label || props.recipe_label.length <1) && (
                        <tr><td></td></tr>
                    )}
                        <tr>
                            <td style={{
                                padding: '0px 0px 7px 5px',msoPaddingAlt: '0 0 7 5',
                                verticalAlign: 'top',fontFamily: 'Agrandir, Verdana, Geneva, sans-serif',
                                fontSize: '16px',lineHeight: '24px',
                                fontWeight: 400,letterSpacing: 'unset', margin: '4px 0px', textDecoration: 'none',whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',overflow: 'hidden'
                            }}>
                                <a href={props.recipeFullUrl} style={{ textDecoration: "none",
                                   color: `${props.bodyTextColor ? props.bodyTextColor : props.defaultBodyTextColor}`
                                 }}>
                                    {props.recipe_title}
                                </a>
                            </td>
                        </tr>
                        {props.recipe_description && props.recipe_description.length > 0 && (
                        <tr>
                        <td style={{
                            padding: '0 0 7px 5px',
                            fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
                            fontSize: '14px',
                            lineHeight: '16px',
                            color: '#231f20'
                        }}>
                            {props.recipe_description}
                        </td>
                        </tr>
                    )}
                    {(!props.recipe_description || props.recipe_description.length <1) && (
                        <tr>
                        <td style={{
                            padding: '0 0 7px 5px',
                            fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
                            fontSize: '14px',
                            lineHeight: '16px',
                            color: '#231f20'
                        }}>with beans, spinach and vegetables with garlic
                        </td>
                        </tr>
                    )}

                    </table>
                </td>
          


    )
}