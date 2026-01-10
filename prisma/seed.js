const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const extensions = [
  { id: 'js-recon-radar', name: 'JS Recon Radar', price: 49 },
  { id: 'param-hawk', name: 'ParamHawk', price: 39 },
  { id: 'authflow-visualizer', name: 'AuthFlow Visualizer', price: 59 },
  { id: 'rad', name: 'Response Anomaly Detector (RAD)', price: 45 },
  { id: 'scope-guardian', name: 'Scope Guardian + Program Intel Hub', price: 29 },
  { id: 'dom-sink-tracker', name: 'DOM Sink Tracker', price: 55 },
  { id: 'smart-diff-engine', name: 'Smart Diff Engine', price: 19 },
  { id: 'request-mutator-lab', name: 'Request Mutator Lab', price: 49 },
  { id: 'hunters-second-brain', name: "Hunter's Second Brain", price: 69 },
  { id: 'tech-stack-deep-profiler', name: 'Tech Stack Deep Profiler', price: 35 },
  { id: 'api-schema-reconstructor', name: 'API Schema Reconstructor', price: 79 },
  { id: 'bit', name: 'Blind Interaction Tracker (BIT)', price: 59 },
  { id: 'access-control-matrix', name: 'Access Control Matrix Builder', price: 65 },
  { id: 'report-generator-pro', name: 'Report Generator Pro', price: 49 },
  { id: 'websocket-analyzer', name: 'WebSocket & Real-Time Traffic Analyzer', price: 55 },
  { id: 'recon-aggregator', name: 'Recon Aggregator & Auto-Correlator', price: 89 },
  { id: 'workflow-orchestrator', name: 'Workflow Orchestrator & Hotkey Commander', price: 39 },
];

async function main() {
  console.log('Start seeding...');
  for (const ext of extensions) {
    const extension = await prisma.extension.upsert({
      where: { id: ext.id },
      update: {},
      create: {
        id: ext.id,
        name: ext.name,
        price: ext.price,
      },
    });
    console.log(`Upserted extension: ${extension.name}`);
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
