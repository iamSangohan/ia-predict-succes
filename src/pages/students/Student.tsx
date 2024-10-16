import { useLocation, useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AvatarCard from 'components/sections/dashboard/avatar-card';
import PersonalInfo from 'components/sections/dashboard/personal-info';
import CourseHistory from 'components/sections/dashboard/courses';


const Student = () => {
    const { studentId } = useParams<{ studentId: string }>();
    const location = useLocation();
    const student = location.state?.student;
    console.log(student);
    
    return (
        <Grid container spacing={2.5}>
            <Grid item xs={12} md={4}>
                <AvatarCard />
            </Grid>
            <Grid item xs={12} md={8}>
                <PersonalInfo student={student} />
            </Grid>
            <Grid item xs={12}>
                {studentId}
                <CourseHistory />
            </Grid>
            {/* Autres composants */}
        </Grid>
    );
};

export default Student;