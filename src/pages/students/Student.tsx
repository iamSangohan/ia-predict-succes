import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';


const Student = () => {
    const { studentId } = useParams<{ studentId: string }>();
    
    return (
        <Grid container spacing={2.5}>
            <Grid item xs={12}>
                <h1>Student ID: {studentId}</h1>
            </Grid>
            <Grid item xs={12}>
                {studentId}
            </Grid>
            {/* Autres composants */}
        </Grid>
    );
};

export default Student;