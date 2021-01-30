import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import profileImage from '../../assets/images/profile.jpg'
import BasicTimeline, {CustomItemLineSeparator} from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData'
import PersonIcon from '@material-ui/icons/PersonOutlineRounded'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'
import CustomButton from '../Button/CustomButton'
import GetAppIcon from '@material-ui/icons/GetApp'

const CustomTimeline = ({title, link, text})=>{
        return(
                <TimelineItem >
                <CustomItemLineSeparator/>
                <TimelineContent>
                        { link ? (
                                <Typography>
                                      <span className='title'>{title}: </span> 
                                      <a className="text_style" href={link} target="_blank"> {text}</a>
                                </Typography>
                        ) : (
                                <Typography>
                                        <span className='title'>{title}: </span>{text}
                                </Typography>
                        )}
                        
                </TimelineContent>
      </TimelineItem>
        )
};

export default function Profile() {
        return (
                <div className='myClass'>
                        <div className="profile container_shadow">
                        <div className ="profile_name">
                                        <Typography className="name">{resumeData.name}</Typography>
                                        <Typography className='title'>{resumeData.title}</Typography>
                        </div>

                        <figure className='profile_image'>
                                <img src={profileImage} alt="nothing" />
                        </figure>
                        <div className='profile_information'>
                                        <BasicTimeline icon={<PersonIcon/>} >
                                                <CustomTimeline className='title' title="Name" text={resumeData.name} />
                                                <CustomTimeline className='text_style' title="Position" text={resumeData.title} />
                                                {/* <CustomTimeline title="Email" text={resumeData.email} /> */}

                                                {Object.keys(resumeData.socials).map(key =>(
                                                        <CustomTimeline title={key} text={resumeData.socials[key].text} link={resumeData.socials[key]} />
                                                ) )}
                                        </BasicTimeline >
                                        <div className='btn_container' style={{display: 'flex'}}>
                                                <CustomButton icon = {<GetAppIcon/>} text='Download CV' />
                                        </div>
                        </div>
                    </div>
                </div>
        )
}
