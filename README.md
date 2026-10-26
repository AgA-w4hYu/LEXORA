# Lexora v2 — prototipe frontend

Prototipe Next.js App Router + TypeScript + Tailwind CSS v4 berdasarkan `LEXORA-PRD-v2.md`.

## Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Akun demo (semua sandi `Lexora123!`):
- `rani@lexora.id` — USER
- `budi@lexora.id` — USER
- `dimas@lexora.id` — LEGAL_REVIEWER
- `admin@lexora.id` — ADMIN

Kasus pelacakan demo: `LXR-2026-000142` / PIN `482913`.

## Batas prototipe

- Tidak ada backend, database, API, integrasi LLM, atau pengiriman laporan sungguhan.
- Kasus dan preferensi disimpan di browser; gunakan data palsu, jangan masukkan data sensitif nyata.
- Kanal dan konten hukum harus diverifikasi sebelum rilis. Label demo dan komentar verifikasi sengaja disertakan.
- Beberapa area memakai komponen halaman generik untuk memperlihatkan alur utama; ini belum setara dengan seluruh detail interaksi/aksesibilitas dalam PRD.

## Pemeriksaan

```bash
npm run typecheck
npm run build
npm run lint
npm test
```
