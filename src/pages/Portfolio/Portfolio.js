import { CardActionArea, CardMedia,Card, CardContent, Grid, Grow, Tab, Tabs, Typography, DialogTitle, DialogActions ,DialogContent, Dialog} from '@material-ui/core'
import React, { useState } from 'react'
import resumeData from '../../utils/resumeData'
import Picture from '../../assets/images/profile1.jpg'

export default function Portfolio() {
        const [tabValue, setTabValue] = useState("All");
        const[projectDialog, setProjectDialog] = useState(false);

        return (
                <Grid container>
                        {/* title  */}
                        <Grid xs={12} item className='section_title'>
                                        <span></span>
                                        <h6 className='section_title_text'>Portfolio </h6>
                        </Grid>
                        {/* tabs  */}
                        <Grid item xs={12} >
                                <div >
                                        <Tabs 
                                                value={tabValue}
                                                indicatorColor="white"
                                                className="customTabs"
                                                onChange={(event, newValue)=>setTabValue(newValue)}>

                                                        <Tab 
                                                                label="All"
                                                                value="All"
                                                                className={tabValue === "All" ? "customTabs_item active": "customTabs_item"} />
                                                
                                                        {[...new Set(resumeData.projects.map(item=> item.tags))].map(tag=>(
                                                                <Tab 
                                                                        label={tag}
                                                                        value={tag}
                                                                        className={tabValue===tag ? "customTabs_item active": "customTabs_item"} />
                                                        ))}
                                        </Tabs>
                                </div>
                        </Grid>
                        <Grid xs={12}>
                                <Grid container spacing={2}>
                                        { resumeData.projects.map(project=>(
                                                <>
                                                        { tabValue== project.tags || tabValue=="All" ? (
                                                                
                                                                        <Grid item xs={12} md={6}>
                                                                                <Grow in timeout={2000}>
                                                                                        <Card  style={{ textAlign: "center"}} onClick={()=> setProjectDialog(project)}>
                                                                                                <CardActionArea>
                                                                                                <img style={{height: "250px", width: "270px"}} src={project.image} alt="" className='dialog_image'/>
                                                                                                <CardContent>
                                                                                                        <Typography>{project.title}</Typography>
                                                                                                        <Typography>{project.description}</Typography>
                                                                                                        </CardContent>

                                                                                                </CardActionArea>
                                                                                        </Card>
                                                                                </Grow>
                                                                        </Grid>
                                                                
                                                        ): null}
                                                </>
                                        ))}
                                </Grid>
                        </Grid>

                        <Dialog style={{textAlign: "center"}} open={projectDialog} onClose={()=> setProjectDialog(false)}>

                                <Card style={{textAlign:"center"}}>
                                        <DialogTitle className='dialog_title'  onClose={()=> setProjectDialog(false)}>
                                                {projectDialog.title}
                                        </DialogTitle>
                                        <img style={{height: "250px", width: "270px"}} src={projectDialog.image} alt="" className='dialog_image'/>
                                        <DialogContent className='dialog_description'>
                                                {projectDialog.description}
                                        </DialogContent>
                                        <DialogActions>
                                                {projectDialog?.links?.map(link=>(
                                                        <a href={link.link} target="_blank">
                                                                {link.icon}
                                                        </a>
                                                ))}
                                        </DialogActions>
                                </Card>
                        </Dialog>
                </Grid>
        )
}
