import { useState, useEffect, useRef, useCallback } from "react"

export type RecordingStatus = "recording" | "inactive" | "paused"

export const useVideoRecorder = () => {
  const [cameraPermission, setCameraPermission] = useState<boolean>(true)
  const [status, setStatus] = useState<RecordingStatus>("inactive")
  const streamRef = useRef<MediaStream | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null)
  const [recording, setRecording] = useState<string | null>(null)
  const [videoFile, setVideoFile] = useState<File | null>(null)

  useEffect(() => {
    getStream()

    return unregister
  }, [])

  const getStream = async () => {
    if ("MediaRecorder" in window) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          // video: true,
          video: { width: 720, height: 405 },
        })
        streamRef.current = stream
        setRecorder(new MediaRecorder(stream))
        setCameraPermission(true)
      } catch (error) {
        console.error(error.message)
        setCameraPermission(false)
      }
    } else {
      console.error("Your browser doesn't support media recording.")
      setCameraPermission(false)
    }
  }

  const unregister = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.src = ""
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
    }
  }, [])

  const startRecording = async () => {
    if (streamRef.current && recorder) {
      recorder.start()
      setStatus("recording")

      setRecording(null)
      setVideoFile(null)

      handleDataAvailable(recorder)
    }
  }

  const stopRecording = async () => {
    if (recorder) {
      recorder.stop()
      setStatus("inactive")
    }
  }

  const handleDataAvailable = (recorder: MediaRecorder) => {
    recorder.ondataavailable = (event) => {
      if (typeof event.data === "undefined" || event.data.size === 0) return
      const chunks = [event.data]

      const blob = new Blob(chunks, { type: chunks[0].type })

      setRecording(URL.createObjectURL(blob))
      setVideoFile(
        new File([blob], "jupitr-recording", {
          lastModified: new Date().getTime(),
          type: blob.type,
        })
      )
    }
  }

  return {
    cameraPermission,
    status,
    streamRef,
    videoRef,
    startRecording,
    stopRecording,
    recording,
    videoFile,
  }
}
