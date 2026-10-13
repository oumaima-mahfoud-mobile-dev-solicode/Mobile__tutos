<?php
Class User {
    protected int $id;
    protected string $email;
    protected string $password;
    protected string $role;

    public function getRoleNom() : string{
       return "Visiteur anonyme";
    }
}