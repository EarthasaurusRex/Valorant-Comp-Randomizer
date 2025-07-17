
const agents = [
    // Duelists
    { name: 'Jett', role: 'Duelist', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Phoenix', role: 'Duelist', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Reyna', role: 'Duelist', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Raze', role: 'Duelist', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Yoru', role: 'Duelist', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Neon', role: 'Duelist', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Iso', role: 'Duelist', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },

    // Initiators
    { name: 'Sova', role: 'Initiator', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Breach', role: 'Initiator', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Skye', role: 'Initiator', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'KAY/O', role: 'Initiator', pseudo_roles: ['Duelist'], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Fade', role: 'Initiator', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Gekko', role: 'Initiator', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },

    // Sentinels
    { name: 'Cypher', role: 'Sentinel', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Killjoy', role: 'Sentinel', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Sage', role: 'Sentinel', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Chamber', role: 'Sentinel', pseudo_roles: ['Duelist'], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Deadlock', role: 'Sentinel', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },

    // Controllers
    { name: 'Viper', role: 'Controller', pseudo_roles: ['Sentinel'], is_solo_controller_viable: false, solo_controller_maps: ['Icebox', 'Breeze'] },
    { name: 'Omen', role: 'Controller', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Brimstone', role: 'Controller', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Astra', role: 'Controller', pseudo_roles: [], is_solo_controller_viable: true, solo_controller_maps: [] },
    { name: 'Harbor', role: 'Controller', pseudo_roles: [], is_solo_controller_viable: false, solo_controller_maps: ['Icebox', 'Breeze'] },
    { name: 'Clove', role: 'Controller', pseudo_roles: ['Duelist'], is_solo_controller_viable: true, solo_controller_maps: [] }
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
    const teamContainer = document.getElementById('team-container');
    teamContainer.innerHTML = '';
    team.forEach(agent => {
        const agentDiv = document.createElement('div');
        agentDiv.classList.add('agent');
        agentDiv.innerHTML = `
            <img src="agent-icons/${agent.name}.png" alt="${agent.name}">
            <p>${agent.name}</p>
        `;
        teamContainer.appendChild(agentDiv);
    });
}
