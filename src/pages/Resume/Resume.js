import { Grid ,Icon,Paper,Typography} from '@material-ui/core';
import React from 'react'
import './Resume.css'
import resumeData from '../../utils/resumeData'
import BasicTimeline, { CustomItemLineSeparator } from '../../components/Timeline/Timeline';
import { CastForEducation, School, Work } from '@material-ui/icons';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';

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
                        <Grid>
                        <Grid item className='section_title'>
                                        <span></span>
                                        <h6 className='section_title_text'>My Skills : </h6>
                                </Grid>

                                <Grid contaniner className='skill_content' spacing={3} justify='space-between'  >
                                        <Grid>
                                                {resumeData.skills.map(skill=>(
                                                        <Grid item xs={12} sm={6} md={3}>
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
                </>
        )
}

export default Resume;