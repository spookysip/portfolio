import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./Home"), {
  ssr: false,
});

const tech = [
  { id: 1, name: "Next JS", type: "Front End", selected: false },
  { id: 2, name: "React", type: "Front End", selected: false },
  { id: 3, name: "Typescript", type: "Front End", selected: false },
  { id: 4, name: "SCSS", type: "Front End", selected: false },

  { id: 5, name: "Node JS", type: "Back End", selected: false },
  { id: 6, name: "Express", type: "Back End", selected: false },
  { id: 7, name: "Typescript", type: "Back End", selected: false },

  { id: 8, name: "REST", type: "API", selected: false },

  { id: 9, name: "MySQL", type: "Database", selected: false },
  { id: 10, name: "Planetscale", type: "Database", selected: false },
  { id: 11, name: "Prisma", type: "Database", selected: false },
  { id: 12, name: "NoSQL", type: "Database", selected: false },
  { id: 13, name: "MongoDB", type: "Database", selected: false },
  { id: 14, name: "Mongoose", type: "Database", selected: false },

  { id: 15, name: "Amplify", type: "Infrastructure", selected: false },
  { id: 16, name: "Lambda", type: "Infrastructure", selected: false },
  { id: 17, name: "RDS", type: "Infrastructure", selected: false },
  { id: 18, name: "DynamoDB", type: "Infrastructure", selected: false },
  { id: 19, name: "CloudFormation", type: "Infrastructure", selected: false },
  { id: 20, name: "CloudPipeline", type: "Infrastructure", selected: false },
  { id: 21, name: "CloudFront", type: "Infrastructure", selected: false },
  { id: 22, name: "CloudWatch", type: "Infrastructure", selected: false },
  { id: 23, name: "CDK", type: "Infrastructure", selected: false },
  { id: 24, name: "SDK", type: "Infrastructure", selected: false },
  { id: 25, name: "S3", type: "Infrastructure", selected: false },
  { id: 26, name: "API Gateway", type: "Infrastructure", selected: false },
  { id: 27, name: "Route 53", type: "Infrastructure", selected: false },
  { id: 28, name: "Secrets Manager", type: "Infrastructure", selected: false },
  { id: 29, name: "IAM", type: "Infrastructure", selected: false },
  { id: 30, name: "KMS", type: "Infrastructure", selected: false },
  { id: 31, name: "Vercel", type: "Infrastructure", selected: false },

  { id: 32, name: "Stripe", type: "NPM", selected: false },
  { id: 33, name: "Nodemailer", type: "NPM", selected: false },
  { id: 34, name: "Customer IO", type: "NPM", selected: false },
  { id: 35, name: "Howler", type: "NPM", selected: false },
  { id: 36, name: "Forest Admin", type: "NPM", selected: false },
];

export default async function Home() {
  return (
    <div>
      <HomePage tech={tech} />
    </div>
  );
}
