// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    APP_NAME: 'Gestor BENDO corp',
    APP_DESCRIPTION: 'Aplicación para el gestor bendo corp',
    APP_PRINCIPAL_LOGO: 'assets/images/logo.png',
    production: false,
    SERVIDOR: "http://localhost:8095",
    CONTEXT_GESTION_PROYECTOS: "/gestorBendoCorp/",
    get APLICATIVO_GESTION_PROYECTOS() {
        return this.SERVIDOR + this.CONTEXT_GESTION_PROYECTOS;
    },
    keycloack_url: 'http://172.16.56.9:8080',
    keycloack_realm: 'qphSeguridadDesarrollo',
    keycloack_clientId: 'gestorBendoFrontEnd',
    keycloack_redirectUri: 'http://localhost:4200',
    get KEYCLOAK_ISSUER() {
        return `${this.keycloack_url}/realms/${this.keycloack_realm}`;
    },
};

