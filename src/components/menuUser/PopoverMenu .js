import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import './PopoverMenu.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexto/AuthProvider'; 

/*
El componente PopoverMenu muestra un menú emergente con opciones de 
navegación y acciones para el usuario. Utiliza 
PrimeReact para la funcionalidad del menú y la notificación de toast.
*/

export default function PopoverMenu() {
    const menuLeft = useRef(null);  // Referencia al menú
    const toast = useRef(null);  // Referencia a la toast
    const navigate = useNavigate();  // Hook para navegación programática
    const { state } = useAuth(); // Obtener el estado de autenticación
    const userId = state.user?.id; // Obtener la ID del usuario desde el estado

    // Elementos del menú
    const items = [
        {
            items: [
                {
                    label: 'Mi perfil',
                    command: () => navigate('/profile')
                },
                {
                    label: 'Mi lista personal',
                    command: () => navigate(`/listapersonal/${userId}`)
                },
                {
                    label: 'Buscar usuarios',
                    command: () => navigate('/searchusers')
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
            <Button label="Ajustes" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
        </div>
    )
}
  