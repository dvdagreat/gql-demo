import Team from "./model/team.model";

export const teamProviders = [
    {
        provide: 'TEAM_REPOSITORY',
        useValue: Team
    }
];