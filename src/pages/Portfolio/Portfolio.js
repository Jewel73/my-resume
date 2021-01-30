import { CardActionArea, CardMedia,Card, CardContent, Grid, Grow, Tab, Tabs, Typography, DialogTitle, DialogActions ,DialogContent, Dialog} from '@material-ui/core'
import React, { useState } from 'react'
import resumeData from '../../utils/resumeData'

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
                        <Grid item xs={6} sm={7} md={12} >
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
                        </Grid>
                        <Grid item xs={12}>
                                <Grid container spacing={2}>
                                        { resumeData.projects.map(project=>(
                                                <>
                                                        { tabValue== project.tags || tabValue=="All" ? (
                                                                <Grid item>
                                                                        <Grow in timeout={1000}>
                                                                                <Card onClick={()=> setProjectDialog(project)}>
                                                                                        <CardActionArea>
                                                                                               <CardMedia/>
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

                        <Dialog open={projectDialog} onClose={()=> setProjectDialog(false)}>

                                <DialogTitle className='dialog_title'  onClose={()=> setProjectDialog(false)}>
                                        {projectDialog.title}
                                </DialogTitle>
                                <img src="" alt="" className='dialog_image'/>
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
                        </Dialog>
                </Grid>
        )
}
