import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-light auth-main-container">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <SignIn />
      </div>
    </main>
  );
}
