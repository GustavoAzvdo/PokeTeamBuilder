import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { AccountCircle, PasswordRounded } from '@mui/icons-material';

const login = () => {
    return (
        <Box sx={{ background: '#DCE5FF', height: '100vh', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ backgroundColor: '#fff', height: '600px', width: '450px', margin: 'auto', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <Stack direction="column" alignItems="center" gap={2}>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h2">⚡</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" fontWeight={600}>PokéTeam Builder</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="subtitle2" color='text.secondary' sx={{ width: '80%' }} align="center">Monte seu time favorito para cada jogo da franquia</Typography>
                    </Box>
                </Stack>
                <Stack direction="column" alignItems="center" gap={2} sx={{ mt: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '80%', gap: 1 }} >
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField 
                            variant="standard" 
                            label="Email" 
                            type="email" 
                            fullWidth 
                            focused 
                            color='warning'
                            helperText="exemplo@pokemon.com"
                            />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '80%', gap: 1 }}>
                        <PasswordRounded sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField variant="standard" label="Senha" type="password" fullWidth focused color='warning'/>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', mt: 2 }}>
                        <Button variant="contained" sx={{ width: '80%', backgroundColor: '#444', '&:hover': { backgroundColor: '#222' } }} >Entrar</Button>
                    </Box>
                </Stack>
            </Box>

        </Box>
    )

}

export default login