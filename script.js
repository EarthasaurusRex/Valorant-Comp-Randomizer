

const agents = [
    // Duelists
    { name: 'Iso', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Iso_icon' },
    { name: 'Jett', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Jett_icon' },
    { name: 'Neon', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Neon_icon' },
    { name: 'Phoenix', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Phoenix_icon' },
    { name: 'Raze', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Raze_icon' },
    { name: 'Reyna', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Reyna_icon' },
    { name: 'Yoru', role: 'Duelist', display_role: 'Duelist', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Yoru_icon' },

    // Initiators
    { name: 'Breach', role: 'Flash Initiator', display_role: 'Initiator', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Breach_icon' },
    { name: 'Fade', role: 'Info Initiator', display_role: 'Initiator', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Fade_icon' },
    { name: 'Gekko', role: 'Flash Initiator', display_role: 'Initiator', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Gekko_icon' },
    { name: 'KAY/O', role: 'Flash Initiator', display_role: 'Initiator', pseudo_roles: ['Duelist'], is_solo_viable: true, solo_maps: [], icon_name: 'KAYO_icon' },
    { name: 'Skye', role: 'Flash Initiator', display_role: 'Initiator', pseudo_roles: ['Info Initiator'], is_solo_viable: true, solo_maps: [], icon_name: 'Skye_icon' },
    { name: 'Sova', role: 'Info Initiator', display_role: 'Initiator', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Sova_icon' },

    // Controllers
    { name: 'Astra', role: 'Controller', display_role: 'Controller', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Astra_icon' },
    { name: 'Brimstone', role: 'Controller', display_role: 'Controller', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Brimstone_icon' },
    { name: 'Clove', role: 'Controller', display_role: 'Controller', pseudo_roles: ['Duelist'], is_solo_viable: true, solo_maps: [], icon_name: 'Clove_icon' },
    { name: 'Harbor', role: 'Controller', display_role: 'Controller', pseudo_roles: [], is_solo_viable: false, solo_maps: ['Icebox', 'Breeze'], icon_name: 'Harbor_icon' },
    { name: 'Omen', role: 'Controller', display_role: 'Controller', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Omen_icon' },
    { name: 'Viper', role: 'Controller', display_role: 'Controller', pseudo_roles: ['Sentinel'], is_solo_viable: false, solo_maps: ['Icebox', 'Breeze'], icon_name: 'Viper_icon' },

    // Sentinels
    { name: 'Chamber', role: 'Sentinel', display_role: 'Sentinel', pseudo_roles: ['Duelist'], is_solo_viable: true, solo_maps: [], icon_name: 'Chamber_icon' },
    { name: 'Cypher', role: 'Sentinel', display_role: 'Sentinel', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Cypher_icon' },
    { name: 'Deadlock', role: 'Sentinel', display_role: 'Sentinel', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Deadlock_icon' },
    { name: 'Killjoy', role: 'Sentinel', display_role: 'Sentinel', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Killjoy_icon' },
    { name: 'Sage', role: 'Sentinel', display_role: 'Sentinel', pseudo_roles: [], is_solo_viable: true, solo_maps: [], icon_name: 'Sage_icon' }
];

function generateTrueRandom() {
    const shuffledAgents = [...agents].sort(() => 0.5 - Math.random());
    const team = shuffledAgents.slice(0, 5);
    displayTeam(team);
}

function generateDecentRandom() {
    // Placeholder for now
    console.log("Decent Random generation to be implemented.");
    // For demonstration, just shows the first 5 agents.
    displayTeam(agents.slice(0,5)); 
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

