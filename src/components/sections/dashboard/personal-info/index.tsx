import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconifyIcon from 'components/base/IconifyIcon';
import { StudentInfo as StudentInfoData } from 'services/modele/modele';
import axios from 'axios';
import { Box } from '@mui/material';

interface StudentInfoProps {
  id: number;
  label: string;
  value: string;
  icon: string;
  color: string;
}

const StudentInfos: StudentInfoProps[] = [
  {
    id: 1,
    label: 'Nom complet',
    value: 'John Doe',
    icon: 'ic:outline-person',
    color: 'primary.main',
  },
  {
    id: 2,
    label: 'Date de naissance',
    value: '15 Mars 1998',
    icon: 'ic:outline-event',
    color: 'success.main',
  },
  {
    id: 3,
    label: 'Adresse',
    value: '123 Rue de l\'Université, Paris',
    icon: 'ic:outline-home',
    color: 'warning.main',
  },
  {
    id: 4,
    label: 'Email',
    value: 'johndoe@example.com',
    icon: 'ic:outline-email',
    color: 'error.main',
  },
  {
    id: 5,
    label: 'Numéro de téléphone',
    value: '+33 6 12 34 56 78',
    icon: 'ic:outline-phone',
    color: 'secondary.main',
  },
  {
    id: 6,
    label: 'Filière',
    value: 'Informatique',
    icon: 'ic:outline-school',
    color: 'info.main',
  },
];

interface StudentInfoProp {
  student: StudentInfoData;
}

const StudentInfo = ({ student }: StudentInfoProp) => {
  const [open, setOpen] = useState(false);
  const [resultContent, setResultContent] = useState<React.ReactNode | null>(null);

  const handlePredict = async () => {
    try {
      const response = await axios.get(`https://test.yes-ivoire.com/recommandation/${student.id_student}`);
      const { Study, engagement, recommended } = response.data;
      setResultContent(
        <>
          <Typography variant="h6">Recommandation</Typography>
          <Typography variant="body1">Type d'étude: {Study}</Typography>
          <Typography variant="body1">Engagement: {engagement}</Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>Cours Recommandés:</Typography>
          <List>
            {recommended.map((course: string, index: number) => (
              <ListItem key={index}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box height={50} width={4} bgcolor="primary.main" borderRadius={2} />
                  <Typography variant="body1" fontWeight={700}>
                    {course}
                  </Typography>
                </Stack>
              </ListItem>
            ))}
          </List>
        </>
      );
      setOpen(true);
    } catch (error) {
      console.log("errr", error);
      setResultContent(<Typography color="error">Erreur lors de la récupération des recommandations.</Typography>);
      setOpen(true);
    }
  };
  const handleSuccess = async () => {
    try {
      const response = await axios.get(`https://test.yes-ivoire.com/succes/${student.id_student}`);
      const { need_help } = response.data;
      setResultContent(
        <>
          <Typography variant="h6">Prédiction de réussite scolaire</Typography>
          <Typography variant="body1">
            {need_help ? "L'étudiant a besoin d'aide." : "L'étudiant n'a pas besoin d'aide."}
          </Typography>
        </>
      );
      setOpen(true);
    } catch (error) {
      console.log("errr", error);
      setResultContent(<Typography color="error">Erreur lors de la prédiction de réussite.</Typography>);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setResultContent(null);
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography mb={3} variant="h5">
        Informations personnelles de l'étudiant
      </Typography>

      <Grid container spacing={2}>
        {StudentInfos.map((item) => (
          <Grid item xs={6} key={item.id}>
            <Stack mb={3} spacing={2} justifyContent="flex-start" alignItems="center">
              <Stack
                alignItems="center"
                justifyContent="center"
                height={48}
                width={48}
                bgcolor="info.dark"
                borderRadius="50%"
              >
                <IconifyIcon icon={item.icon} color={item.color} fontSize="h4.fontSize" />
              </Stack>
              <Stack direction="column" alignItems="left">
                <Typography variant="body1" fontWeight={700}>
                  {item.label}
                </Typography>
                <Typography variant="caption" color="text.disabled" fontWeight={500}>
                  {item.value}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Stack justifyContent="flex-end" alignItems="center">
        <Button
          variant="text"
          size="medium"
          sx={{ color: 'primary.main', fontWeight: 700 }}
          endIcon={<IconifyIcon icon="ic:baseline-east" />}
          onClick={handlePredict}
        >
          Faire des recommandations
        </Button>
      </Stack>
      <Stack justifyContent="flex-end" alignItems="center">
        <Button
          variant="text"
          size="medium"
          sx={{ color: 'primary.main', fontWeight: 700 }}
          endIcon={<IconifyIcon icon="ic:baseline-east" />}
          onClick={handleSuccess}
        >
          Prédire probabilité de réussite scolaire
        </Button>
      </Stack>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Résultat</DialogTitle>
        <DialogContent>{resultContent}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default StudentInfo;
