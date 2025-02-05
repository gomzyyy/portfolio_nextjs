"use client";
import { auth } from "@/firebase/firebase";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getAllRequests } from "@/service/api";
import { requestType } from "@/types";
import RequestCard from "./components/RequestCard";
import { darkTheme } from "@/hooks/useTheme";

function AllRequests() {
  const router = useRouter();
  const params = useSearchParams();
  const pageNumber = Number(params.get("page"));
  const authorId = useSelector((s: RootState) => s.admin.admin?.uid);
  const [requests, setRequests] = useState<requestType[]>([]);
  const [fetchingReq, setFetchingReq] = useState<boolean>(false);

  useEffect(() => {
    if (!authorId || authorId !== "dZRovaGYgPh1Aj9Z2rskZBFXSa83") {
      router.replace("/");
      return;
    }
    const fetchRequests = async () => {
      try {
        const res = await getAllRequests(authorId, pageNumber);
        setRequests(res.requests);
      } catch (error) {
        throw new Error(
          error instanceof Error ? error.message : "Internal error occured."
        );
      }
    };
    const timerId = setTimeout(() => {
      fetchRequests();
      setFetchingReq(true);
    }, 2000);
    return () => {
      clearTimeout(timerId);
      fetchingReq && setFetchingReq(false);
    };
  }, [pageNumber]);

  return (
    <div
      className="py-8 px-8"
      style={{ height: requests.length < 8 ? "100vh" : "fit" }}
    >
      {requests.length !== 0 ? (
        fetchingReq ? (
          <div
            className="flex flex-wrap gap-2"
            style={{ justifyContent: requests.length < 4 ? "start" : "center" }}
          >
            {requests.map((s, i) => (
              <RequestCard key={i} request={s} />
            ))}
          </div>
        ) : (
          <div
            className="flex justify-center pt-3 text-xl font-bold"
            style={{ color: darkTheme.text }}
          >
            Intentional latency is added due to security reasons, please be
            paitent.
          </div>
        )
      ) : (
        <div
          className="flex justify-center pt-3 text-xl font-bold"
          style={{ color: darkTheme.text }}
        >
          No requests found.
        </div>
      )}
    </div>
  );
}

export default AllRequests;
