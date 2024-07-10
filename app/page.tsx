import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./Home"), {
  ssr: false,
});

const tech = [
  // Front End
  { id: 93206806, name: "Next JS", type: "Front End", selected: false },
  { id: 77762329, name: "React", type: "Front End", selected: false },
  { id: 68025628, name: "Typescript", type: "Front End", selected: false },
  { id: 70890557, name: "SCSS", type: "Front End", selected: false },

  // Back End
  { id: 60088648, name: "Node JS", type: "Back End", selected: false },
  { id: 84071992, name: "Express", type: "Back End", selected: false },
  { id: 65667794, name: "Typescript", type: "Back End", selected: false },
  { id: 79378490, name: "Python", type: "Back End", selected: false },

  // API
  { id: 37311184, name: "REST", type: "API", selected: false },

  // Database
  { id: 64879801, name: "MySQL", type: "Database", selected: false },
  { id: 61503304, name: "Planetscale", type: "Database", selected: false },
  { id: 89554979, name: "Prisma", type: "Database", selected: false },
  { id: 73030401, name: "NoSQL", type: "Database", selected: false },
  { id: 73362079, name: "MongoDB", type: "Database", selected: false },
  { id: 57009578, name: "Mongoose", type: "Database", selected: false },

  // Infrastructure
  {
    id: 6593939244,
    name: "Digital Ocean",
    type: "Infrastructure",
    selected: false,
  },
  { id: 65939392, name: "Amplify", type: "Infrastructure", selected: false },
  { id: 19033388, name: "Lambda", type: "Infrastructure", selected: false },
  { id: 48623093, name: "RDS", type: "Infrastructure", selected: false },
  { id: 86922466, name: "DynamoDB", type: "Infrastructure", selected: false },
  {
    id: 63043656,
    name: "CloudFormation",
    type: "Infrastructure",
    selected: false,
  },
  {
    id: 21903310,
    name: "CloudPipeline",
    type: "Infrastructure",
    selected: false,
  },
  { id: 62746874, name: "CloudFront", type: "Infrastructure", selected: false },
  { id: 78257886, name: "CloudWatch", type: "Infrastructure", selected: false },
  { id: 55882386, name: "CDK", type: "Infrastructure", selected: false },
  { id: 56422034, name: "SDK", type: "Infrastructure", selected: false },
  { id: 36976903, name: "S3", type: "Infrastructure", selected: false },
  {
    id: 92860268,
    name: "API Gateway",
    type: "Infrastructure",
    selected: false,
  },
  { id: 79545424, name: "Route 53", type: "Infrastructure", selected: false },
  {
    id: 38728182,
    name: "Secrets Manager",
    type: "Infrastructure",
    selected: false,
  },
  { id: 89930050, name: "IAM", type: "Infrastructure", selected: false },
  { id: 75822646, name: "KMS", type: "Infrastructure", selected: false },
  { id: 26885185, name: "Vercel", type: "Infrastructure", selected: false },

  { id: 73111623, name: "Stripe", type: "NPM/External APIs", selected: false },
  {
    id: 39403119,
    name: "Nodemailer",
    type: "NPM/External APIs",
    selected: false,
  },
  {
    id: 20947143,
    name: "Customer IO",
    type: "NPM/External APIs",
    selected: false,
  },
  {
    id: 73662979,
    name: "Mailchimp",
    type: "NPM/External APIs",
    selected: false,
  },
  { id: 61910401, name: "Howler", type: "NPM/External APIs", selected: false },
  {
    id: 68799176,
    name: "Forest Admin",
    type: "NPM/External APIs",
    selected: false,
  },
  { id: 68799196, name: "Discord", type: "NPM/External APIs", selected: false },
];

export default async function Home() {
  return (
    <div>
      <HomePage tech={tech} />
    </div>
  );
}
