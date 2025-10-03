import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/admin-login');
        }
    }, [user, navigate])

    if (!user) return null;
    return children
}

export default ProtectedRoutes
