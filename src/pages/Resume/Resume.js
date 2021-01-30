import { Grid ,Icon,Paper,TextField,Typography} from '@material-ui/core';
import React from 'react'
import './Resume.css'
import resumeData from '../../utils/resumeData'
import BasicTimeline, { CustomItemLineSeparator } from '../../components/Timeline/Timeline';
import { CastForEducation, School, Work } from '@material-ui/icons';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CustomButton from '../../components/Button/CustomButton';

export const Resume = () => {
        return (
                <>
                        <Grid  container className='section'>
                                <Grid item className='section_title'>
                                        <span></span>
                                        <h6 className='section_title_text'>About Me</h6>
                                </Grid>
                                <Grid item xs={12}>
                                        <Typography className='section_content'>{resumeData.about}</Typography>
                                </Grid>
                        </Grid>

                        {/* Education and experice */}
                        <Grid  container className='section resume_timeline' >
                                <Grid item className='section_title'>
                                        <span></span>
                                        <h6 className='section_title_text'>Resume</h6>
                                </Grid>

                                <Grid item xs={12}>
                                        <Grid container>
                                                <Grid item xs={12}  sm={12} md={6}>
                                                        <BasicTimeline icon={<Work />} title="Working History" />
                                                        {resumeData.experience.map(experience =>(
                                                                <TimelineItem className='child_timeline'>
                                                                        <CustomItemLineSeparator />
                                                                        <TimelineContent>
                                                                                <Typography className='titleline_title'>{experience.title}</Typography>
                                                                                <Typography variant={'caption'} className='titleline_date'>{experience.date}</Typography>
                                                                                <Typography variant={'body2'} className='titleline_description'>{experience.description}</Typography>
                                                                        </TimelineContent>
                                                                </TimelineItem>
                                                        ))}
                                                </Grid >
                                               
                                                <Grid item xs={12}  sm={12} md={6}>
                                                        <BasicTimeline icon={<School />} title="Education Qualification" />
                                                        {resumeData.educations.map(education =>(
                                                                <TimelineItem className='child_timeline'>
                                                                        <CustomItemLineSeparator />
                                                                        <TimelineContent>
                                                                                <Typography className='titleline_title'>{education.title}</Typography>
                                                                                <Typography variant={'caption'} className='titleline_date'>{education.date}</Typography>
                                                                                <Typography variant={'body2'} className='titleline_description'>{education.description}</Typography>
                                                                        </TimelineContent>
                                                                </TimelineItem>
                                                        ))}
                                                </Grid >

                                        </Grid>
                                </Grid>
                                
                        </Grid>

                        {/* my services */}
                        <Grid  container className='section'>
                                <Grid item className='section_title'>
                                        <span></span>
                                        <h6 className='section_title_text'>My Services</h6>
                                </Grid>

                                <Grid item xs={12}>
                                        <Grid container spacing={3} justify='space-around'>
                                                {resumeData.services.map(service=>(
                                                        <Grid item xs={12} sm ={6} md={3}>
                                                                <div className="service">
                                                                        <Icon className="service_icon">{service.icon}</Icon>
                                                                        <Typography className="service_title" variant='h6'>{service.title}</Typography>
                                                                        <Typography className="service_description" variant={'body2'}>{service.description}</Typography>
                                                                </div>
                                                        </Grid>
                                                ))}
                                        </Grid>
                                </Grid>
                                
                        </Grid>

                        {/* My Skill */}
                        <Grid className='section'>
                                <Grid item className='section_title'>
                                        <span></span>
                                        <h6 className='section_title_text'>My Skills : </h6>
                                </Grid>

                                <Grid item >
                                        <Grid  container className='skill_content' spacing={1} justify='space-between'  >
                                                        {resumeData.skills.map(skill=>(
                                                                <Grid item xs={12} sm={6} md={4}>
                                                                        <Paper elevation={0} className="skill">
                                                                                <Typography variant='h6' className="skill_title">{skill.title}</Typography>
                                                                                {skill.description.map(element=>(
                                                                                        <Typography variant='body2' className='skill_description'>
                                                                                                <TimelineDot variant={'outlined'}  className='timeline_dot_padding' />
                                                                                                {element}
                                                                                        </Typography>
                                                                                ))}
                                                                        </Paper>
                                                                </Grid>
                                                        ))}        
                                        </Grid>
                                </Grid>
                        </Grid>
                        
                        {/* contact form */}
                        <Grid container className='contact_form' spacing={3}>
                                <Grid item xs={12} sm={6} lg={7}>
                                        <Grid container>
                                                <Grid item className='section_title'>
                                                        <span></span>
                                                        <h6 className='section_title_text'>Contact Form :  </h6>
                                                </Grid>

                                                <Grid container spacing={3}>
                                                        <Grid item xs={12} sm={6} md={6}>
                                                                <TextField autoComplete="off" fullWidth name='name' label="Name"></TextField>
                                                        </Grid>
                                                        <Grid item xs={12} sm={6} md={6}>
                                                                <TextField autoComplete="off" fullWidth name='email' label="E-mail"></TextField>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} md={12}>
                                                                <TextField autoComplete="off" fullWidth name='Message' label="message" multiline col={4}></TextField>
                                                        </Grid>
                                                        <Grid item>
                                                                <div className="button_contact_form">
                                                                        <CustomButton text="Send Message"/>
                                                                </div>
                                                        </Grid>
                                                </Grid>
                                        </Grid>
                                </Grid>

                                {/* conatac info */}
                                <Grid item xs={12} sm={6} md={5} >
                                        <Grid container>
                                                <Grid item className='section_title'>
                                                        <span></span>
                                                        <h6 className='section_title_text'>Contact Information </h6>
                                                </Grid>
                                                <Grid item>
                                                        <Grid container spacing={1}>
                                                                <Grid item xs={12} >
                                                                        <Typography><span className='contact_info_title'>Address: </span>{resumeData.address}</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                        <Typography><span  className='contact_info_title'>Email: </span>{resumeData.email}</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                        <Typography><span  className='contact_info_title'>Phone: </span>{resumeData.phone}</Typography>
                                                                </Grid>
                                                                
                                                        </Grid>
                                                </Grid>

                                                <Grid item xs ={12}  className='contact_form_social_icon'>
                                                        <Grid container spacing={1}>
                                                                {Object.keys(resumeData.socials).map(key=>(
                                                                       <Grid item className='contact_icon_wrapper'>
                                                                               <a className='contact_icon_link' href={resumeData.socials[key].link} > {resumeData.socials[key].icon}</a>
                                                                       </Grid>
                                                                ))}
                                                        </Grid>
                                                </Grid>
                                        </Grid>
                                </Grid>
                        </Grid>
                </>
        )
}

export default Resume;