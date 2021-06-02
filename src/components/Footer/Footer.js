import { Typography } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import resumeData from '../../utils/resumeData'
export default function Footer() {
        return (
                <div className='footer'>
                        <div className="footer_left">
                                <Typography className='footer_name'>{resumeData.name}</Typography>
                        </div>
                        <div className='footer_right'>
                                <Typography className='footer_copywrite'>
                                        Designed And Developed by {" "}
                                        <a href="/" target="_blank">{resumeData.name}</a>
                                        <br />
                                        Idea From {" "}
                                        <a className="idea_name" href="/" target="_blank">Travonline</a>
                                </Typography>
                        </div>
                </div>
        )
}
