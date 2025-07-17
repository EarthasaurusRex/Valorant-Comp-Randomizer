

const agents = [
    // Duelists
    { name: 'Iso', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Iso_icon' },
    { name: 'Jett', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Jett_icon' },
    { name: 'Neon', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Neon_icon' },
    { name: 'Phoenix', role: 'Duelist', display_role: 'Duelist', pseudo_roles: ['Flash Initiator'], is_solo_viable: true, solo_maps: [], icon_name: 'Phoenix_icon' },
    { name: 'Raze', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Raze_icon' },
    { name: 'Reyna', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Reyna_icon' },
    { name: 'Waylay', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Waylay_icon' },
    { name: 'Yoru', role: 'Duelist', display_role: 'Duelist', pseudo_roles: ['Flash Initiator'], is_solo_viable: true, solo_maps: [], icon_name: 'Yoru_icon' },

    // Initiators
    { name: 'Breach', role: 'Flash Initiator', display_role: 'Initiator', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Breach_icon' },
    { name: 'Fade', role: 'Info Initiator', display_role: 'Initiator', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Fade_icon' },
    { name: 'Gekko', role: 'Flash Initiator', display_role: 'Initiator', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Gekko_icon' },
    { name: 'KAY/O', role: 'Flash Initiator', display_role: 'Initiator', pseudo_roles: ['Info Initiator'], is_solo_viable: true, solo_maps: [], icon_name: 'KAYO_icon' },
    { name: 'Skye', role: 'Flash Initiator', display_role: 'Initiator', pseudo_roles: ['Info Initiator'], is_solo_viable: true, solo_maps: [], icon_name: 'Skye_icon' },
    { name: 'Sova', role: 'Info Initiator', display_role: 'Initiator', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Sova_icon' },
    { name: 'Tejo', role: 'Info Initiator', display_role: 'Initiator', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Tejo_icon' },

    // Controllers
    { name: 'Astra', role: 'Controller', display_role: 'Controller', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Astra_icon' },
    { name: 'Brimstone', role: 'Controller', display_role: 'Controller', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Brimstone_icon' },
    { name: 'Clove', role: 'Controller', display_role: 'Controller', pseudo_roles: ['Duelist'], is_solo_viable: true, solo_maps: [], icon_name: 'Clove_icon' },
    { name: 'Harbor', role: 'Controller', display_role: 'Controller', pseudo_roles: [], is_solo_viable: false, solo_maps: ['Breeze', 'Icebox', 'Lotus'], icon_name: 'Harbor_icon' },
    { name: 'Omen', role: 'Controller', display_role: 'Controller', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Omen_icon' },
    { name: 'Viper', role: 'Controller', display_role: 'Controller', pseudo_roles: ['Sentinel'], is_solo_viable: false, solo_maps: ['Breeze', 'Icebox', 'Split'], icon_name: 'Viper_icon' },

    // Sentinels
    { name: 'Chamber', role: 'Sentinel', display_role: 'Sentinel', pseudo_roles: ['Duelist'], is_solo_viable: true, solo_maps: [], icon_name: 'Chamber_icon' },
    { name: 'Cypher', role: 'Sentinel', display_role: 'Sentinel', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Cypher_icon' },
    { name: 'Deadlock', role: 'Sentinel', display_role: 'Sentinel', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Deadlock_icon' },
    { name: 'Killjoy', role: 'Sentinel', display_role: 'Sentinel', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Killjoy_icon' },
    { name: 'Sage', role: 'Sentinel', display_role: 'Sentinel', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Sage_icon' },
    { name: 'Vyse', role: 'Sentinel', display_role: 'Sentinel', pseudo_roles: ['Info Initiator'], is_solo_viable: true, solo_maps: [], icon_name: 'Vyse_icon' }
];

function generateTrueRandom() {
    const shuffledAgents = [...agents].sort(() => 0.5 - Math.random());
    const team = shuffledAgents.slice(0, 5);
    displayTeam(team);
}

function generateDecentRandom() {
    let availableAgents = [...agents];
    let team = [];
    const requiredRoles = ['Duelist', 'Info Initiator', 'Flash Initiator', 'Controller', 'Sentinel'];

    // 1. Get one of each required role
    for (const role of requiredRoles) {
        const agentsForRole = availableAgents.filter(a => a.role === role);
        if (agentsForRole.length > 0) {
            const selectedAgent = agentsForRole[Math.floor(Math.random() * agentsForRole.length)];
            team.push(selectedAgent);
            availableAgents = availableAgents.filter(a => a.name !== selectedAgent.name);
        }
    }

    // 2. Fill remaining slots if any role was missing, prioritizing pseudo-roles
    while (team.length < 5 && availableAgents.length > 0) {
        const teamRoles = new Set(team.map(a => a.role).concat(...team.map(a => a.pseudo_roles)));
        const missingRoles = requiredRoles.filter(r => !teamRoles.has(r));

        let addedAgent = false;
        if (missingRoles.length > 0) {
            for (const missingRole of missingRoles) {
                const pseudoAgents = availableAgents.filter(a => a.pseudo_roles.includes(missingRole));
                if (pseudoAgents.length > 0) {
                    const selectedAgent = pseudoAgents[Math.floor(Math.random() * pseudoAgents.length)];
                    team.push(selectedAgent);
                    availableAgents = availableAgents.filter(a => a.name !== selectedAgent.name);
                    addedAgent = true;
                    break; 
                }
            }
        }

        if (!addedAgent) {
            const randomIndex = Math.floor(Math.random() * availableAgents.length);
            const randomAgent = availableAgents[randomIndex];
            team.push(randomAgent);
            availableAgents = availableAgents.filter(a => a.name !== randomAgent.name);
        }
    }
    
    // 3. Handle solo controllers
    const controllers = team.filter(a => a.role === 'Controller');
    if (controllers.length === 1) {
        const soloController = controllers[0];
        if (!soloController.is_solo_viable) {
            const otherControllers = availableAgents.filter(a => a.role === 'Controller');
            if (otherControllers.length > 0) {
                const newController = otherControllers[Math.floor(Math.random() * otherControllers.length)];
                
                const nonControllers = team.filter(a => a.role !== 'Controller');
                if (nonControllers.length > 0) {
                    const agentToReplace = nonControllers[Math.floor(Math.random() * nonControllers.length)];
                    team = team.filter(a => a.name !== agentToReplace.name);
                    team.push(newController);
                }
            }
        }
    }

    // Ensure team has exactly 5 members
    while (team.length > 5) {
        team.pop();
    }
    while (team.length < 5 && availableAgents.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableAgents.length);
        team.push(availableAgents.splice(randomIndex, 1)[0]);
    }

    displayTeam(team);
}

function displayTeam(team) {
    const roleOrder = ['Duelist', 'Initiator', 'Controller', 'Sentinel'];

    team.sort((a, b) => {
        const roleA = roleOrder.indexOf(a.display_role);
        const roleB = roleOrder.indexOf(b.display_role);

        if (roleA !== roleB) {
            return roleA - roleB;
        }

        return a.name.localeCompare(b.name);
    });

    const teamContainer = document.getElementById('team-container');
    teamContainer.innerHTML = '';
    team.forEach(agent => {
        const agentDiv = document.createElement('div');
        agentDiv.classList.add('agent');
        agentDiv.innerHTML = `
            <img src="agent-icons/${agent.icon_name}.png" alt="${agent.name}">
            <p>${agent.name}</p>
        `;
        teamContainer.appendChild(agentDiv);
    });
}

