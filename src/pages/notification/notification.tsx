import { Grid, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const ListeNotif = [
    {
        id: 1,
        title: 'Étudiant à risque',
        description: 'Jean K. a une faible participation et risque d’échec.',
        date: '2024-10-14'
    },
    {
        id: 2,
        title: 'Recommandation à valider',
        description: 'Validez la recommandation pour améliorer les résultats de Marie D.',
        date: '2024-10-13'
    },
    {
        id: 3,
        title: 'Nouvelle alerte de performance',
        description: 'Les notes de Ahmed S. ont chuté de 15% au cours des dernières semaines.',
        date: '2024-10-12'
    },
    {
        id: 4,
        title: 'Recommandation ajustée',
        description: 'Vous avez ajusté la recommandation pour le cours de Mathématiques de Fatima Z.',
        date: '2024-10-10'
    },
    {
        id: 5,
        title: 'Participation faible',
        description: 'Paul T. n\'a pas participé aux cours cette semaine.',
        date: '2024-10-09'
    }
];

const Notification = () => {
    return (
        <Grid container spacing={2.5}>
            <Grid item xs={12}>
                <Typography variant="h4" minWidth={200}>
                    Notification
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <List>
                    {ListeNotif.map((notif) => (
                        <div key={notif.id}>
                            <ListItem>
                                <ListItemText
                                    primary={notif.title}
                                    secondary={`${notif.description} - ${notif.date}`}
                                />
                            </ListItem>
                            <Divider />
                        </div>
                    ))}
                </List>
            </Grid>
        </Grid>
    );
}

export default Notification;
