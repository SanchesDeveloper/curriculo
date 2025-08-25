

// Mostrar/Ocultar projetos
document.getElementById("toggleProjetos").addEventListener("click", () => {
    const projetos = document.querySelector(".projetos-container");
    projetos.style.display = projetos.style.display === "none" ? "flex" : "none";
});

// Gráfico de habilidades no Canvas
const canvas = document.getElementById("skillsChart");
const ctx = canvas.getContext("2d");

const skills = ["HTML", "CSS", "JavaScript", "React", "SQL"];
const values = [90, 85, 80, 70, 75]; // porcentagem de habilidade

function drawChart() {
    const barWidth = 60;
    const gap = 30;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    skills.forEach((skill, i) => {
        const x = i * (barWidth + gap) + 50;
        const y = canvas.height - values[i] * 3;

        // Barra
        ctx.fillStyle = "#004aad";
        ctx.fillRect(x, y, barWidth, values[i] * 3);

        // Texto
        ctx.fillStyle = "#333";
        ctx.textAlign = "center";
        ctx.fillText(skill, x + barWidth / 2, canvas.height - 10);
        ctx.fillText(values[i] + "%", x + barWidth / 2, y - 5);
    });
}

drawChart();
