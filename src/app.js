let modo = "menu";

function registroSistema() {
  console.log("=== Inicio del sistema ===");
  console.time("ProcesoPrincipal");

  function accesoUsuario(usuario) {
    console.count(`Acceso de usuario ${usuario}`);
  }

  accesoUsuario('Carlos');
  accesoUsuario('Ana');
  accesoUsuario('Carlos');

  console.warn("⚠️ Capacidad de usuarios alcanzando el límite");
  console.error("❌ Error: No se pudo conectar a la base de datos");

  const usuarios = [
    { nombre: "Carlos", rol: "Admin" },
    { nombre: "Ana", rol: "User" }
  ];

  console.log("\n📋 Usuarios conectados:");
  console.table(usuarios);

  console.timeEnd("ProcesoPrincipal");
  console.log("=== Fin del sistema ===");
}

function iniciarCLI() {
  console.log('Bienvenido a la CLI de ejemplo');
  console.log('Comandos disponibles: hola, tiempo, salir');
  process.stdout.write('Ingresa un nuevo comando: ');
  modo = "cli";
}

const os = require('os');

function mostrarInformacion() {
  console.clear();

  console.log('🖥️  Monitor de Sistema');
  console.log('========================');
  console.log(`Sistema: ${os.platform()} (${os.arch()})`);
  console.log(`CPU: ${os.cpus()[0].model}`);
  console.log(`Cores: ${os.cpus().length}`);
  console.log(`Memoria Libre: ${(os.freemem() / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Memoria Total: ${(os.totalmem() / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Uptime: ${(os.uptime() / 60).toFixed(2)} minutos`);
  console.log(`Usuario: ${os.userInfo().username}`);
  console.log('========================\n');
}

console.log(`
=============================
 Bienvenido a System Analitics
=============================
1. Ejecutar Registro del Sistema
2. Iniciar CLI
3. Monitor del Sistema
=============================
`);

process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  const input = data.trim().toLowerCase();

  if (modo === "menu") {
    switch (input) {
      case '1':
        registroSistema();
        break;
      case '2':
        iniciarCLI();
        return;
      case '3':
        mostrarInformacion();
        break;
      default:
        console.log('❌ Opción no válida, elige 1, 2 o 3');
    }
    process.stdout.write('Selecciona otra opción: ');
  } else if (modo === "cli") {
    switch (input) {
      case 'hola':
        console.log('¡Hola! ¿Cómo estás?');
        break;
      case 'tiempo':
        console.log(`⏱️ Tiempo activo: ${process.uptime().toFixed(2)} segundos`);
        break;
      case 'salir':
        console.log('Saliendo...');
        process.exit(0);
      default:
        console.log('Comando no reconocido');
    }
    process.stdout.write('Ingresa un nuevo comando: ');
  }
});