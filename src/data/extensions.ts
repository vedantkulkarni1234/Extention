export interface Extension {
  id: string;
  name: string;
  description: string;
  category: 'recon' | 'analysis' | 'exploit' | 'workflow';
  features: string[];
}

export const extensions: Extension[] = [
  {
    id: 'js-recon-radar',
    name: 'JS Recon Radar',
    description: 'Deep-dive JavaScript analysis and endpoint discovery in real-time.',
    category: 'recon',
    features: ['Endpoint extraction', 'Secret detection', 'Source map reconstruction'],
  },
  {
    id: 'param-hawk',
    name: 'ParamHawk',
    description: 'Cross-page parameter tracker for hidden state discovery.',
    category: 'recon',
    features: ['Hidden param detection', 'State tracking', 'Automated fuzzing'],
  },
  {
    id: 'authflow-visualizer',
    name: 'AuthFlow Visualizer',
    description: 'Map out complex authentication and authorization flows visually.',
    category: 'analysis',
    features: ['Token lifecycle mapping', 'OAuth flow debugging', 'Session tracking'],
  },
  {
    id: 'rad',
    name: 'Response Anomaly Detector (RAD)',
    description: 'Statistical analysis of HTTP responses to find edge cases.',
    category: 'analysis',
    features: ['Baseline comparison', 'Entropy analysis', 'Header anomaly detection'],
  },
  {
    id: 'scope-guardian',
    name: 'Scope Guardian + Program Intel Hub',
    description: 'Centralized management for bug bounty scopes and program data.',
    category: 'workflow',
    features: ['Real-time scope monitoring', 'Program policy alerts', 'Asset tracking'],
  },
  {
    id: 'dom-sink-tracker',
    name: 'DOM Sink Tracker',
    description: 'Trace user input from source to dangerous sinks in the DOM.',
    category: 'exploit',
    features: ['XSS source tracking', 'Taint analysis', 'Sink monitoring'],
  },
  {
    id: 'smart-diff-engine',
    name: 'Smart Diff Engine',
    description: 'Intelligent comparison of responses and JS files.',
    category: 'analysis',
    features: ['Code diffing', 'Structure comparison', 'Dynamic noise filtering'],
  },
  {
    id: 'request-mutator-lab',
    name: 'Request Mutator Lab',
    description: 'Interactive playground for rapid request manipulation.',
    category: 'exploit',
    features: ['Byte-level mutation', 'Protocol switching', 'Payload generation'],
  },
  {
    id: 'hunters-second-brain',
    name: "Hunter's Second Brain",
    description: 'Knowledge management system specifically for security researchers.',
    category: 'workflow',
    features: ['Vulnerability templates', 'Report drafting', 'Evidence management'],
  },
  {
    id: 'tech-stack-deep-profiler',
    name: 'Tech Stack Deep Profiler',
    description: 'Fingerprint technologies beyond just Wappalyzer.',
    category: 'recon',
    features: ['Version detection', 'CVE correlation', 'Dependency mapping'],
  },
  {
    id: 'api-schema-reconstructor',
    name: 'API Schema Reconstructor',
    description: 'Reverse engineer API schemas from observed traffic.',
    category: 'analysis',
    features: ['OpenAPI generation', 'Endpoint grouping', 'Parameter typing'],
  },
  {
    id: 'bit',
    name: 'Blind Interaction Tracker (BIT)',
    description: 'Manage and monitor out-of-band interactions.',
    category: 'exploit',
    features: ['OOB server integration', 'Real-time alerts', 'Payload correlation'],
  },
  {
    id: 'access-control-matrix',
    name: 'Access Control Matrix Builder',
    description: 'Automated testing of broken access controls.',
    category: 'exploit',
    features: ['Role-based testing', 'IDOR discovery', 'Permission mapping'],
  },
  {
    id: 'report-generator-pro',
    name: 'Report Generator Pro',
    description: 'Convert findings into high-quality professional reports.',
    category: 'workflow',
    features: ['Custom templates', 'Screenshot management', 'Collaboration tools'],
  },
  {
    id: 'websocket-analyzer',
    name: 'WebSocket & Real-Time Traffic Analyzer',
    description: 'Deep inspection of binary and text-based WebSockets.',
    category: 'analysis',
    features: ['Message intercepting', 'Protobuf decoding', 'Traffic replaying'],
  },
  {
    id: 'recon-aggregator',
    name: 'Recon Aggregator & Auto-Correlator',
    description: 'Unify data from various recon tools into a single view.',
    category: 'recon',
    features: ['Tool integration', 'Data normalization', 'Conflict resolution'],
  },
  {
    id: 'workflow-orchestrator',
    name: 'Workflow Orchestrator & Hotkey Commander',
    description: 'Automate repetitive tasks with custom hotkeys and macros.',
    category: 'workflow',
    features: ['Custom macro builder', 'Global hotkeys', 'Automation scripts'],
  },
];
