import React from 'react';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/solid';

export default function navBar() {
  return (
    <nav className={`navbar font-lunasima text-white`}>
      <ul className="navbar-menu ">
        <li className="navbar-menu-item">
          <a className="navbar-link">Inicio</a>
        </li>
        <li className="navbar-menu-item">
          <a className="navbar-link">Catálogo</a>
        </li>
        <li className="navbar-menu-item">
          <a className="navbar-link">Personalizada</a>
        </li>
        <li className="navbar-menu-item">
          <a className="navbar-link">Sobre nosotros</a>
        </li>
        <li className="navbar-menu-item">
          <a className="navbar-link">Contacto</a>
        </li>
      </ul>
      <ul className="navbar-user flex items-center space-x-4">
        <li className="navbar-user-item flex items-center space-x-2">
          <UserIcon className="h-8 w-8 text-white" />
          <span>Login</span>
        </li>
        <li className="navbar-user-item flex items-center space-x-2">
          <ShoppingCartIcon className="h-8 w-8 text-white" />
          <span>Carrito</span>
        </li>
      </ul>
    </nav>
  );
}
