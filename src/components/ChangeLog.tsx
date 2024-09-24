"use client";
import { useState } from "react"
import { Button } from "@mui/material";
import { BasicModal } from "./modals";
import changelog from "../../changelog.json"

export default function ChangeLog() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const data = Object.entries(changelog);
    const changes = (
        <ul>
            {
                data.map((row: any, rowIndex: number) => {
                    return (
                        <li key={rowIndex}>
                            {row[0]}
                            <ul>
                                {
                                    row[1].map((data: any, dataIndex: number) => {
                                        return <li key={dataIndex}> {data} </li>
                                    })
                                }
                            </ul>
                        </li>
                    );
                })
            }
        </ul>
    )
    return (
        <>
            <Button
                variant="text"
                color="info"
                onClick={() => setIsModalOpen(true)}
            >
                What's New?
            </Button>
            <BasicModal
                isOpen={isModalOpen}
                modalTitle="What's New"
                handleClose={() => setIsModalOpen(false)}
                content={changes}
            />
        </>
    )
}