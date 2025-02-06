import { requestType } from "@/types";
import React from "react";

const RequestCard: React.FC<{ request: requestType }> = ({ request }) => {
  return (
    <div className="bg-[#1E1E1E] text-white rounded-2xl p-6 shadow-lg border border-gray-700 w-fit min-h-[190px] min-w-[300px]">
      <h2 className="text-xl font-semibold text-[#FFD700]">{request.name}</h2>
      <p className="text-sm text-gray-400">{request.email}</p>

      {request.author && typeof request.author !== "string" && (
        <p className="mt-2 text-sm">
          <span className="font-medium text-gray-300">Author:</span>
          {request.author.displayName}
        </p>
      )}

      {request.countryCode?.length !== 0 && request.number?.length !== 0 && (
        <p className="mt-1 text-sm">
          <span className="font-medium text-gray-300">Phone:{" "}</span>
          {request.countryCode}-
          {request.number
            ? request.number?.trim().length !== 0 && request.number
            : "Not given."}
        </p>
      )}

      {request.message && request.message.trim().length !== 0 && (
        <p className="mt-2 text-sm">
          <span className="font-medium text-gray-300">Message:{" "}</span>
          {request.message}
        </p>
      )}

     {request.socialHandleUrl && request.socialHandleUrl.trim().length !== 0 && <a
        href={request.socialHandleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-[#FFD700] hover:underline text-sm cursor-pointer"
      >
        View {request.socialHandleUrlType} Profile
      </a>}
    </div>
  );
};

export default RequestCard;
