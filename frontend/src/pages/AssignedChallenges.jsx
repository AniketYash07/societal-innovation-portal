import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  CalendarDays,
  Users,
  ArrowRight,
  MoreHorizontal,
  Clock3,
  CheckCircle2,
  X,
  Plus,
  Send,
  FileText,
  Check,
  AlertCircle,
  Pencil,
  Trash2,
  Eye,
  UserPlus,
} from "lucide-react";

/* =========================================================
   INITIAL DATA
========================================================= */

const initialChallenges = [
  {
    id: 1,
    title: "Build a Responsive Portfolio Website",
    description:
      "Create a modern responsive portfolio website using HTML, CSS and JavaScript.",
    difficulty: "Intermediate",
    dueDate: "Sep 05, 2026",
    rawDueDate: "2026-09-05",
    students: 24,
    submitted: 16,
    status: "Active",
    assignedStudents: [
      "Aarav Sharma",
      "Priya Singh",
      "Rahul Kumar",
      "Ananya Das",
    ],
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "Build a weather dashboard that displays real-time weather information using an API.",
    difficulty: "Intermediate",
    dueDate: "Sep 10, 2026",
    rawDueDate: "2026-09-10",
    students: 18,
    submitted: 9,
    status: "Active",
    assignedStudents: [
      "Rohan Gupta",
      "Sneha Kumari",
      "Aditya Raj",
    ],
  },
  {
    id: 3,
    title: "Student Management System",
    description:
      "Develop a simple student management system with CRUD operations and a clean interface.",
    difficulty: "Advanced",
    dueDate: "Sep 15, 2026",
    rawDueDate: "2026-09-15",
    students: 20,
    submitted: 7,
    status: "Active",
    assignedStudents: [
      "Vikash Kumar",
      "Neha Singh",
      "Aman Verma",
    ],
  },
  {
    id: 4,
    title: "Landing Page Challenge",
    description:
      "Design and develop a professional landing page based on the provided requirements.",
    difficulty: "Beginner",
    dueDate: "Aug 30, 2026",
    rawDueDate: "2026-08-30",
    students: 30,
    submitted: 26,
    status: "Ending Soon",
    assignedStudents: [
      "Karan Singh",
      "Simran Das",
      "Riya Kumari",
    ],
  },
  {
    id: 5,
    title: "AI Powered Student Assistant",
    description:
      "Build an AI-powered assistant that helps students find learning resources.",
    difficulty: "Advanced",
    dueDate: "Sep 25, 2026",
    rawDueDate: "2026-09-25",
    students: 15,
    submitted: 0,
    status: "Draft",
    assignedStudents: [],
  },
];

/* =========================================================
   STATUS STYLES
========================================================= */

function getStatusClass(status) {
  switch (status) {
    case "Draft":
      return "bg-slate-100 text-slate-600 border-slate-200";

    case "Published":
      return "bg-purple-50 text-purple-700 border-purple-200";

    case "Active":
      return "bg-blue-50 text-blue-700 border-blue-200";

    case "Ending Soon":
      return "bg-orange-50 text-orange-700 border-orange-200";

    case "Completed":
      return "bg-green-50 text-green-700 border-green-200";

    default:
      return "bg-slate-100 text-slate-600 border-slate-200";
  }
}

/* =========================================================
   CHALLENGE CARD
========================================================= */

function ChallengeCard({
  challenge,
  onView,
  onMenu,
  menuOpen,
  onPublish,
  onEdit,
  onDelete,
  onStudents,
  onSubmissions,
}) {
  const progress =
    challenge.students > 0
      ? Math.round(
          (challenge.submitted / challenge.students) * 100
        )
      : 0;

  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClass(
              challenge.status
            )}`}
          >
            {challenge.status}
          </span>

          <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-900">
            {challenge.title}
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
            {challenge.description}
          </p>
        </div>

        {/* Menu */}
        <div className="relative shrink-0">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            onClick={(event) => {
              event.stopPropagation();
              onMenu(challenge.id);
            }}
          >
            <MoreHorizontal size={20} />
          </button>

          {menuOpen && (
            <div
              className="absolute right-0 top-11 z-30 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => onView(challenge)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
              >
                <Eye size={15} />
                View Challenge
              </button>

              <button
                type="button"
                onClick={() => onEdit(challenge)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
              >
                <Pencil size={15} />
                Edit Challenge
              </button>

              {challenge.status === "Draft" && (
                <button
                  type="button"
                  onClick={() => onPublish(challenge)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
                >
                  <Send size={15} />
                  Publish Challenge
                </button>
              )}

              {challenge.status !== "Draft" &&
                challenge.status !== "Completed" && (
                  <>
                    <button
                      type="button"
                      onClick={() => onStudents(challenge)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Users size={15} />
                      Manage Students
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onSubmissions(challenge)
                      }
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <CheckCircle2 size={15} />
                      View Submissions
                    </button>
                  </>
                )}

              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                onClick={() => onDelete(challenge)}
              >
                <Trash2 size={15} />
                Delete Challenge
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Information */}
      <div className="mt-6 grid gap-4 border-y border-slate-100 py-5 sm:grid-cols-3">
        <InfoItem
          icon={CalendarDays}
          label="Due Date"
          value={challenge.dueDate}
        />

        <InfoItem
          icon={Users}
          label="Students"
          value={challenge.students}
        />

        <InfoItem
          icon={Clock3}
          label="Difficulty"
          value={challenge.difficulty}
        />
      </div>

      {/* Progress */}
      {challenge.status !== "Draft" && (
        <div className="mt-5">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">
              Submissions
            </span>

            <strong className="text-slate-800">
              {challenge.submitted}/{challenge.students}
            </strong>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-blue-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="mt-2 block text-xs text-slate-400">
            {progress}% completed
          </span>
        </div>
      )}

      {/* Draft information */}
      {challenge.status === "Draft" && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-orange-100 bg-orange-50 p-4 text-sm text-orange-700">
          <AlertCircle size={17} className="mt-0.5 shrink-0" />

          <span>
            This challenge is saved as a draft. Publish it
            when it is ready for students.
          </span>
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          {challenge.status === "Draft" ? (
            <>
              <FileText size={17} />
              <span>Not published yet</span>
            </>
          ) : (
            <>
              <CheckCircle2
                size={17}
                className="text-green-500"
              />

              <span>
                {challenge.submitted} submissions received
              </span>
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {challenge.status === "Draft" && (
            <button
              type="button"
              onClick={() => onPublish(challenge)}
              className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              <Send size={15} />
              Publish
            </button>
          )}

          {challenge.status !== "Draft" &&
            challenge.status !== "Completed" && (
              <button
                type="button"
                onClick={() => onStudents(challenge)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <Users size={15} />
                Students
              </button>
            )}

          <button
            type="button"
            onClick={() => onView(challenge)}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View Challenge
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
        <Icon size={17} />
      </div>

      <div>
        <span className="block text-xs text-slate-400">
          {label}
        </span>

        <strong className="mt-0.5 block text-sm font-semibold text-slate-800">
          {value}
        </strong>
      </div>
    </div>
  );
}

/* =========================================================
   DETAILS MODAL
========================================================= */

function ChallengeDetails({
  challenge,
  onClose,
  onPublish,
  onEdit,
  onStudents,
  onSubmissions,
}) {
  const progress =
    challenge.students > 0
      ? Math.round(
          (challenge.submitted / challenge.students) * 100
        )
      : 0;

  return (
    <Modal>
      <div className="flex items-start justify-between gap-4">
        <div>
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClass(
              challenge.status
            )}`}
          >
            {challenge.status}
          </span>

          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            {challenge.title}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {challenge.status === "Draft"
              ? "This challenge has not been published yet."
              : "Challenge details and submission progress."}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
          <X size={20} />
        </button>
      </div>

      <p className="mt-6 text-sm leading-6 text-slate-600">
        {challenge.description}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <DetailBox label="Due Date" value={challenge.dueDate} />
        <DetailBox
          label="Difficulty"
          value={challenge.difficulty}
        />
        <DetailBox
          label="Total Students"
          value={challenge.students}
        />
        <DetailBox
          label="Status"
          value={challenge.status}
        />
      </div>

      {challenge.status !== "Draft" && (
        <div className="mt-6">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-slate-600">
              Submission Progress
            </span>

            <strong>{progress}%</strong>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="mt-2 block text-xs text-slate-400">
            {challenge.submitted} of {challenge.students}{" "}
            students submitted
          </span>
        </div>
      )}

      {challenge.status === "Draft" && (
        <div className="mt-6 flex gap-3 rounded-xl border border-orange-100 bg-orange-50 p-4">
          <AlertCircle
            size={19}
            className="mt-0.5 shrink-0 text-orange-500"
          />

          <div>
            <strong className="text-sm text-orange-800">
              Ready to publish?
            </strong>

            <p className="mt-1 text-sm text-orange-700">
              Publishing will make this challenge available
              to students.
            </p>
          </div>
        </div>
      )}

      <div className="mt-7 flex flex-wrap justify-end gap-2 border-t border-slate-100 pt-5">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Close
        </button>

        <button
          type="button"
          onClick={() => onEdit(challenge)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          <Pencil size={16} />
          Edit
        </button>

        {challenge.status === "Draft" ? (
          <button
            type="button"
            onClick={() => onPublish(challenge)}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <Send size={16} />
            Publish
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={() => onStudents(challenge)}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <Users size={16} />
              Students
            </button>

            <button
              type="button"
              onClick={() => onSubmissions(challenge)}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              View Submissions
              <ArrowRight size={17} />
            </button>
          </>
        )}
      </div>
    </Modal>
  );
}

function DetailBox({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <span className="block text-xs text-slate-400">
        {label}
      </span>

      <strong className="mt-1 block text-sm font-semibold text-slate-800">
        {value}
      </strong>
    </div>
  );
}

/* =========================================================
   COMMON MODAL
========================================================= */

function Modal({ children, wide = false }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
      <div
        className={`max-h-[90vh] w-full overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl ${
          wide ? "max-w-3xl" : "max-w-2xl"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   PUBLISH MODAL
========================================================= */

function PublishChallengeModal({
  challenge,
  onClose,
  onConfirm,
}) {
  if (!challenge) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-7 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
        >
          <X size={19} />
        </button>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Send size={24} />
        </div>

        <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-blue-600">
          Challenge Publishing
        </span>

        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Publish Challenge?
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          You are about to publish this challenge to your
          students.
        </p>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClass(
                  challenge.status
                )}`}
              >
                {challenge.status}
              </span>

              <h3 className="mt-3 font-bold text-slate-900">
                {challenge.title}
              </h3>
            </div>

            <CheckCircle2
              size={22}
              className="text-green-500"
            />
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            {challenge.description}
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <InfoItem
              icon={CalendarDays}
              label="Due Date"
              value={challenge.dueDate}
            />

            <InfoItem
              icon={Users}
              label="Students"
              value={challenge.students}
            />

            <InfoItem
              icon={Clock3}
              label="Difficulty"
              value={challenge.difficulty}
            />
          </div>
        </div>

        <div className="mt-5 flex gap-3 rounded-xl border border-orange-100 bg-orange-50 p-4 text-sm text-orange-700">
          <AlertCircle size={17} className="shrink-0" />

          <span>
            Once published, students will be able to see
            the challenge and begin working on it.
          </span>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => onConfirm(challenge)}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <Send size={16} />
            Publish Challenge
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CREATE / EDIT MODAL
========================================================= */

function ChallengeFormModal({
  challenge,
  mode,
  onClose,
  onSave,
}) {
  const isEdit = mode === "edit";

  const [form, setForm] = useState({
    title: challenge?.title || "",
    description: challenge?.description || "",
    difficulty: challenge?.difficulty || "Beginner",
    dueDate: challenge?.rawDueDate || "",
    students: String(challenge?.students || 20),
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title.trim()) return;

    onSave(form);
  };

  return (
    <Modal>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {isEdit ? "Edit Challenge" : "Create Challenge"}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {isEdit
              ? "Update the challenge information."
              : "Create a challenge and save it as a draft."}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
        >
          <X size={20} />
        </button>
      </div>

      {!isEdit && (
        <div className="mt-6 flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <FileText
            size={18}
            className="mt-0.5 shrink-0 text-blue-600"
          />

          <div>
            <strong className="block text-sm text-blue-800">
              New challenge starts as Draft
            </strong>

            <span className="mt-1 block text-sm text-blue-700">
              You can review it before publishing it to
              students.
            </span>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-5"
      >
        <FormField label="Challenge Title">
          <input
            type="text"
            placeholder="e.g. Build a Quiz App"
            value={form.title}
            onChange={(event) =>
              setForm({
                ...form,
                title: event.target.value,
              })
            }
            className="input-style"
          />
        </FormField>

        <FormField label="Description">
          <textarea
            placeholder="Describe the challenge..."
            rows={4}
            value={form.description}
            onChange={(event) =>
              setForm({
                ...form,
                description: event.target.value,
              })
            }
            className="input-style resize-none"
          />
        </FormField>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Difficulty">
            <select
              value={form.difficulty}
              onChange={(event) =>
                setForm({
                  ...form,
                  difficulty: event.target.value,
                })
              }
              className="input-style"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </FormField>

          <FormField label="Due Date">
            <input
              type="date"
              value={form.dueDate}
              onChange={(event) =>
                setForm({
                  ...form,
                  dueDate: event.target.value,
                })
              }
              className="input-style"
            />
          </FormField>
        </div>

        <FormField label="Number of Students">
          <input
            type="number"
            min="1"
            value={form.students}
            onChange={(event) =>
              setForm({
                ...form,
                students: event.target.value,
              })
            }
            className="input-style"
          />
        </FormField>

        <div className="flex justify-end gap-2 border-t border-slate-100 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            <Check size={16} />

            {isEdit ? "Save Changes" : "Save as Draft"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

function FormField({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>

      {children}
    </label>
  );
}

/* =========================================================
   STUDENT MODAL
========================================================= */

function StudentManagementModal({
  challenge,
  onClose,
  onSave,
}) {
  const [studentCount, setStudentCount] = useState(
    challenge.students
  );

  const [students, setStudents] = useState(
    challenge.assignedStudents || []
  );

  const availableStudents = [
    "Aarav Sharma",
    "Priya Singh",
    "Rahul Kumar",
    "Ananya Das",
    "Rohan Gupta",
    "Sneha Kumari",
    "Aditya Raj",
    "Vikash Kumar",
    "Neha Singh",
    "Aman Verma",
    "Karan Singh",
    "Simran Das",
    "Riya Kumari",
  ];

  const toggleStudent = (name) => {
    setStudents((current) =>
      current.includes(name)
        ? current.filter((student) => student !== name)
        : [...current, name]
    );
  };

  return (
    <Modal>
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-bold tracking-wider text-blue-600">
            STUDENT ASSIGNMENT
          </span>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Manage Students
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {challenge.title}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
        >
          <X size={20} />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-4 rounded-xl bg-slate-50 p-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm">
          <Users size={20} />
        </div>

        <div className="flex-1">
          <span className="block text-xs text-slate-400">
            Total students assigned
          </span>

          <strong className="text-xl text-slate-900">
            {studentCount}
          </strong>
        </div>

        <input
          type="number"
          min="1"
          value={studentCount}
          onChange={(event) =>
            setStudentCount(
              Number(event.target.value) || 0
            )
          }
          className="w-24 rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <div>
            <strong className="block text-sm text-slate-800">
              Select Students
            </strong>

            <span className="text-xs text-slate-400">
              {students.length} selected
            </span>
          </div>

          <UserPlus
            size={19}
            className="text-slate-400"
          />
        </div>

        <div className="mt-3 max-h-64 space-y-2 overflow-y-auto">
          {availableStudents.map((student) => {
            const selected = students.includes(student);

            return (
              <button
                key={student}
                type="button"
                onClick={() => toggleStudent(student)}
                className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${
                  selected
                    ? "border-blue-200 bg-blue-50"
                    : "border-slate-100 hover:bg-slate-50"
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-600">
                  {student.charAt(0)}
                </div>

                <span className="flex-1 text-sm font-medium text-slate-700">
                  {student}
                </span>

                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                    selected
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-slate-300"
                  }`}
                >
                  {selected && <Check size={15} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2 border-t border-slate-100 pt-5">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={() =>
            onSave({
              students:
                studentCount ||
                students.length ||
                1,
              assignedStudents: students,
            })
          }
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          <Check size={16} />
          Save Students
        </button>
      </div>
    </Modal>
  );
}

/* =========================================================
   SUBMISSIONS MODAL
========================================================= */

function SubmissionsModal({
  challenge,
  onClose,
}) {
  const submissionNames = [
    "Aarav Sharma",
    "Priya Singh",
    "Rahul Kumar",
    "Ananya Das",
    "Rohan Gupta",
    "Sneha Kumari",
    "Aditya Raj",
  ];

  const submissions = submissionNames.slice(
    0,
    challenge.submitted
  );

  const pending = Math.max(
    challenge.students - challenge.submitted,
    0
  );

  const completion =
    challenge.students > 0
      ? Math.round(
          (challenge.submitted /
            challenge.students) *
            100
        )
      : 0;

  return (
    <Modal wide>
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-bold tracking-wider text-blue-600">
            SUBMISSIONS
          </span>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Student Submissions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {challenge.title}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
        >
          <X size={20} />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <StatBox label="Submitted" value={challenge.submitted} />
        <StatBox label="Pending" value={pending} />
        <StatBox label="Completion" value={`${completion}%`} />
      </div>

      <div className="mt-6 max-h-80 space-y-2 overflow-y-auto">
        {submissions.length > 0 ? (
          submissions.map((student, index) => (
            <div
              key={`${student}-${index}`}
              className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-600">
                {student.charAt(0)}
              </div>

              <div className="flex-1">
                <strong className="block text-sm text-slate-800">
                  {student}
                </strong>

                <span className="text-xs text-slate-400">
                  Submitted successfully
                </span>
              </div>

              <span className="hidden items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 sm:flex">
                <CheckCircle2 size={15} />
                Submitted
              </span>

              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View
                <ArrowRight size={15} />
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <FileText
              size={30}
              className="text-slate-300"
            />

            <strong className="mt-3 text-slate-700">
              No submissions yet
            </strong>

            <span className="mt-1 text-sm text-slate-400">
              Students have not submitted their work.
            </span>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-end border-t border-slate-100 pt-5">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 text-center">
      <span className="block text-xs text-slate-400">
        {label}
      </span>

      <strong className="mt-1 block text-xl text-slate-900">
        {value}
      </strong>
    </div>
  );
}

/* =========================================================
   DELETE MODAL
========================================================= */

function DeleteChallengeModal({
  challenge,
  onClose,
  onConfirm,
}) {
  if (!challenge) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
        >
          <X size={19} />
        </button>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
          <Trash2 size={23} />
        </div>

        <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-red-600">
          Delete Challenge
        </span>

        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Delete this challenge?
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          This will permanently remove{" "}
          <strong className="text-slate-700">
            {challenge.title}
          </strong>
          .
        </p>

        <div className="mt-5 flex gap-3 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={17} className="shrink-0" />

          <span>This action cannot be undone.</span>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => onConfirm(challenge)}
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
          >
            <Trash2 size={16} />
            Delete Challenge
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function AssignedChallenges() {
  const [challenges, setChallenges] =
    useState(initialChallenges);

  const [search, setSearch] = useState("");

  const [activeFilter, setActiveFilter] =
    useState("All Challenges");

  const [menuOpen, setMenuOpen] = useState(null);

  const [selectedChallenge, setSelectedChallenge] =
    useState(null);

  const [publishChallenge, setPublishChallenge] =
    useState(null);

  const [deleteChallenge, setDeleteChallenge] =
    useState(null);

  const [studentChallenge, setStudentChallenge] =
    useState(null);

  const [submissionChallenge, setSubmissionChallenge] =
    useState(null);

  const [formMode, setFormMode] = useState(null);

  const [editingChallenge, setEditingChallenge] =
    useState(null);

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredChallenges = useMemo(() => {
    return challenges.filter((challenge) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        challenge.title
          .toLowerCase()
          .includes(searchValue) ||
        challenge.description
          .toLowerCase()
          .includes(searchValue);

      let matchesFilter = true;

      if (activeFilter === "Active") {
        matchesFilter =
          challenge.status === "Active" ||
          challenge.status === "Ending Soon";
      }

      if (activeFilter === "Completed") {
        matchesFilter =
          challenge.status === "Completed";
      }

      if (activeFilter === "Drafts") {
        matchesFilter =
          challenge.status === "Draft";
      }

      if (activeFilter === "Published") {
        matchesFilter =
          challenge.status === "Published";
      }

      return matchesSearch && matchesFilter;
    });
  }, [challenges, search, activeFilter]);

  /* =======================================================
     CREATE
  ======================================================= */

  const openCreate = () => {
    setEditingChallenge(null);
    setFormMode("create");
  };

  const handleCreate = (form) => {
    const newChallenge = {
      id: Date.now(),
      title: form.title.trim(),
      description:
        form.description.trim() ||
        "No description provided.",
      difficulty: form.difficulty,
      dueDate: form.dueDate
        ? new Date(
            `${form.dueDate}T00:00:00`
          ).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })
        : "Not specified",
      rawDueDate: form.dueDate,
      students: Number(form.students) || 1,
      submitted: 0,
      status: "Draft",
      assignedStudents: [],
    };

    setChallenges((current) => [
      newChallenge,
      ...current,
    ]);

    setFormMode(null);
  };

  /* =======================================================
     EDIT
  ======================================================= */

  const openEdit = (challenge) => {
    setSelectedChallenge(null);
    setMenuOpen(null);
    setEditingChallenge(challenge);
    setFormMode("edit");
  };

  const handleEdit = (form) => {
    setChallenges((current) =>
      current.map((item) => {
        if (item.id !== editingChallenge.id) {
          return item;
        }

        return {
          ...item,
          title: form.title.trim(),
          description:
            form.description.trim() ||
            "No description provided.",
          difficulty: form.difficulty,
          dueDate: form.dueDate
            ? new Date(
                `${form.dueDate}T00:00:00`
              ).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })
            : item.dueDate,
          rawDueDate: form.dueDate,
          students: Number(form.students) || 1,
        };
      })
    );

    setFormMode(null);
    setEditingChallenge(null);
  };

  /* =======================================================
     PUBLISH
  ======================================================= */

  const openPublish = (challenge) => {
    setMenuOpen(null);
    setSelectedChallenge(null);
    setPublishChallenge(challenge);
  };

  const handlePublish = (challenge) => {
    setChallenges((current) =>
      current.map((item) =>
        item.id === challenge.id
          ? {
              ...item,
              status: "Published",
            }
          : item
      )
    );

    setPublishChallenge(null);
  };

  /* =======================================================
     DELETE
  ======================================================= */

  const openDelete = (challenge) => {
    setMenuOpen(null);
    setDeleteChallenge(challenge);
  };

  const handleDelete = (challenge) => {
    setChallenges((current) =>
      current.filter(
        (item) => item.id !== challenge.id
      )
    );

    setDeleteChallenge(null);
    setSelectedChallenge(null);
  };

  /* =======================================================
     STUDENTS
  ======================================================= */

  const openStudents = (challenge) => {
    setMenuOpen(null);
    setSelectedChallenge(null);
    setStudentChallenge(challenge);
  };

  const saveStudents = (data) => {
    setChallenges((current) =>
      current.map((item) =>
        item.id === studentChallenge.id
          ? {
              ...item,
              students: data.students,
              assignedStudents:
                data.assignedStudents,
            }
          : item
      )
    );

    setStudentChallenge(null);
  };

  /* =======================================================
     COUNTS
  ======================================================= */

  const totalChallenges = challenges.length;

  const activeChallenges = challenges.filter(
    (challenge) =>
      challenge.status === "Active" ||
      challenge.status === "Ending Soon"
  ).length;

  const publishedChallenges = challenges.filter(
    (challenge) => challenge.status === "Published"
  ).length;

  const draftChallenges = challenges.filter(
    (challenge) => challenge.status === "Draft"
  ).length;

  const totalSubmissions = challenges.reduce(
    (total, challenge) =>
      total + challenge.submitted,
    0
  );

  return (
    <div
      className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8"
      onClick={() => {
        if (menuOpen !== null) {
          setMenuOpen(null);
        }
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Challenge Management
            </span>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Assigned Challenges
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Create, publish, manage and track challenges
              assigned to your students.
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              openCreate();
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            <Plus size={17} />
            Create Challenge
          </button>
        </div>

        {/* =================================================
            LIFECYCLE
        ================================================= */}

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h2 className="font-bold text-slate-900">
              Challenge Lifecycle
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Manage every stage from creation to completion
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <LifecycleStep
              active
              icon={FileText}
              title="Draft"
              subtitle="Prepare"
            />

            <LifecycleLine />

            <LifecycleStep
              icon={Send}
              title="Published"
              subtitle="Release"
            />

            <LifecycleLine />

            <LifecycleStep
              icon={Clock3}
              title="Active"
              subtitle="Students work"
            />

            <LifecycleLine />

            <LifecycleStep
              icon={CheckCircle2}
              title="Completed"
              subtitle="Evaluate"
            />
          </div>
        </div>

        {/* =================================================
            TOOLBAR
        ================================================= */}

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search challenges..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              onClick={(event) =>
                event.stopPropagation()
              }
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "All Challenges",
              "Active",
              "Drafts",
              "Published",
              "Completed",
            ].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveFilter(filter);
                }}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  activeFilter === filter
                    ? "bg-slate-900 text-white"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                {filter}
              </button>
            ))}

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>
        </div>

        {/* =================================================
            SUMMARY
        ================================================= */}

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
          <SummaryCard
            label="Total Challenges"
            value={totalChallenges}
            description="All created challenges"
          />

          <SummaryCard
            label="Active"
            value={activeChallenges}
            description="Currently available"
          />

          <SummaryCard
            label="Published"
            value={publishedChallenges}
            description="Released challenges"
          />

          <SummaryCard
            label="Drafts"
            value={draftChallenges}
            description="Waiting to publish"
          />

          <SummaryCard
            label="Submissions"
            value={totalSubmissions}
            description="Total received"
          />
        </div>

        {/* =================================================
            LIST
        ================================================= */}

        <div className="mt-6 space-y-5">
          {filteredChallenges.length > 0 ? (
            filteredChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                menuOpen={menuOpen === challenge.id}
                onMenu={(id) => {
                  setMenuOpen((current) =>
                    current === id ? null : id
                  );
                }}
                onView={(challengeToView) => {
                  setSelectedChallenge(
                    challengeToView
                  );
                  setMenuOpen(null);
                }}
                onPublish={openPublish}
                onEdit={openEdit}
                onDelete={openDelete}
                onStudents={openStudents}
                onSubmissions={(challengeToView) => {
                  setMenuOpen(null);
                  setSubmissionChallenge(
                    challengeToView
                  );
                }}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
              <Search
                size={30}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-4 font-bold text-slate-800">
                No challenges found
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Try a different search term or change the
                filter.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All Challenges");
                }}
                className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* =================================================
          MODALS
      ================================================= */}

      {selectedChallenge && (
        <ChallengeDetails
          challenge={selectedChallenge}
          onClose={() =>
            setSelectedChallenge(null)
          }
          onPublish={openPublish}
          onEdit={openEdit}
          onStudents={openStudents}
          onSubmissions={(challenge) => {
            setSelectedChallenge(null);
            setSubmissionChallenge(challenge);
          }}
        />
      )}

      {publishChallenge && (
        <PublishChallengeModal
          challenge={publishChallenge}
          onClose={() =>
            setPublishChallenge(null)
          }
          onConfirm={handlePublish}
        />
      )}

      {formMode && (
        <ChallengeFormModal
          mode={formMode}
          challenge={editingChallenge}
          onClose={() => {
            setFormMode(null);
            setEditingChallenge(null);
          }}
          onSave={
            formMode === "edit"
              ? handleEdit
              : handleCreate
          }
        />
      )}

      {studentChallenge && (
        <StudentManagementModal
          challenge={studentChallenge}
          onClose={() =>
            setStudentChallenge(null)
          }
          onSave={saveStudents}
        />
      )}

      {submissionChallenge && (
        <SubmissionsModal
          challenge={submissionChallenge}
          onClose={() =>
            setSubmissionChallenge(null)
          }
        />
      )}

      {deleteChallenge && (
        <DeleteChallengeModal
          challenge={deleteChallenge}
          onClose={() =>
            setDeleteChallenge(null)
          }
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

/* =========================================================
   LIFECYCLE COMPONENTS
========================================================= */

function LifecycleStep({
  active = false,
  icon: Icon,
  title,
  subtitle,
}) {
  return (
    <div className="flex flex-1 items-center gap-3">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          active
            ? "bg-blue-50 text-blue-600"
            : "bg-slate-50 text-slate-400"
        }`}
      >
        <Icon size={17} />
      </div>

      <div>
        <strong className="block text-sm text-slate-800">
          {title}
        </strong>

        <span className="text-xs text-slate-400">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

function LifecycleLine() {
  return (
    <div className="hidden h-px flex-1 bg-slate-200 md:block" />
  );
}

/* =========================================================
   SUMMARY
========================================================= */

function SummaryCard({
  label,
  value,
  description,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <span className="text-xs font-medium text-slate-400">
        {label}
      </span>

      <strong className="mt-2 block text-2xl font-bold text-slate-900">
        {value}
      </strong>

      <small className="mt-1 block text-xs text-slate-400">
        {description}
      </small>
    </div>
  );
}