import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import './PopoverMenu.css'
import { useNavigate } from 'react-router-dom';

export default function PopoverMenu() {
    const menuLeft = useRef(null);
    const toast = useRef(null);
    const navigate = useNavigate();
    const items = [
        {
            items: [
                {
                    label: 'Mi perfil',
                    command: () => navigate('/profile')
                },
                {
                    label: 'Mi lista personal'
                },
                {
                    label: 'Buscar usuarios'
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
  