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
  { id: 10, name: "NoSQL", type: "Database", selected: false },

  { id: 11, name: "Amplify", type: "AWS", selected: false },
  { id: 12, name: "Lambda", type: "AWS", selected: false },
  { id: 13, name: "RDS", type: "AWS", selected: false },
  { id: 14, name: "DynamoDB", type: "AWS", selected: false },
  { id: 15, name: "CloudFormation", type: "AWS", selected: false },
  { id: 16, name: "CloudPipeline", type: "AWS", selected: false },
  { id: 17, name: "CloudFront", type: "AWS", selected: false },
  { id: 18, name: "CloudWatch", type: "AWS", selected: false },
  { id: 19, name: "CDK", type: "AWS", selected: false },
  { id: 20, name: "SDK", type: "AWS", selected: false },
  { id: 21, name: "S3", type: "AWS", selected: false },
  { id: 22, name: "API Gateway", type: "AWS", selected: false },
  { id: 23, name: "Route 53", type: "AWS", selected: false },
  { id: 24, name: "Secrets Manager", type: "AWS", selected: false },
  { id: 25, name: "IAM", type: "AWS", selected: false },
  { id: 26, name: "KMS", type: "AWS", selected: false },

  { id: 27, name: "Stripe", type: "NPM", selected: false },
  { id: 28, name: "Nodemailer", type: "NPM", selected: false },
  { id: 29, name: "Customer IO", type: "NPM", selected: false },
  { id: 30, name: "Howler", type: "NPM", selected: false },
];

export default async function Home() {
  return (
    <div>
      <HomePage tech={tech} />
    </div>
  );
}
