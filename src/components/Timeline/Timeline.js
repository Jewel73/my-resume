import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import './Timeline.css'

export default function BasicTimeline({title, icon, children}) {
  return (
    <Timeline className='timeline'>

      <TimelineItem className='timeline_firstitem'>
        <TimelineSeparator>
          <TimelineDot  className='timeline_dot_header' >
                  {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
              <Typography  variant='h6'>{title}</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Remaing children */}
      {children}

      
    </Timeline>
  );
}

export  const CustomItemLineSeparator=()=>{
        return(
                <TimelineSeparator className='separator_padding'>
                    <TimelineDot className='timeline_dot'/>
                    <TimelineConnector />
                </TimelineSeparator>
        )
}