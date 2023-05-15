import { Link } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react';
import Dialog from '../../Components/Dashboard/Dialog';
import Base from '../../Layouts/Base';
import useDialog from '../../Hooks/useDialog';
import CreateAdmin from '../../Components/Dashboard/Admins/CreateAdmin';
import EditAdmin from '../../Components/Dashboard/Admins/EditAdmin';
import { Inertia } from '@inertiajs/inertia';

function AdminTableRow({ admin, index, openUpdateDialog, openDestroyDialog }) {
    return (
        <tr key={admin.id}>
            <td className="text-center">{index}</td>
            <td className="text-left">
                <div className="d-flex px-2">
                    <div>
                        <img src="/img/team-2.jpg" className="avatar avatar-sm me-3" />
                    </div>
                    <div className="my-auto">
                        <h6 className="mb-0 text-sm">{admin.name}</h6>
                    </div>
                </div>
            </td>
            <td className="text-left">
                <p className="text-sm font-weight-bold mb-0">{admin.username}</p>
            </td>
            <td className="text-left">
                <span className="text-xs font-weight-bold">{admin.email}</span>
            </td>
            <td className="align-middle text-left">
                <div className="d-flex align-items-center text-left">
                    <span className="text-xs font-weight-bold mb-0">{admin.address}</span>
                </div>
            </td>
            <td className="align-middle text-center" width="10%">
                <div>
                    <button
                        type="button"
                        onClick={() => openUpdateDialog(admin)}
                        className="btn btn-vimeo btn-icon-only mx-2"
                    >
                        <span className="btn-inner--icon">
                            <i className="fas fa-pencil-alt" />
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={() => openDestroyDialog(admin)}
                        className="btn btn-youtube btn-icon-only"
                    >
                        <span className="btn-inner--icon">
                            <i className="fas fa-trash" />
                        </span>
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default function Index(props) {
    const { data: admins, links, meta } = props.admins;
    const [state, setState] = useState([]);
    const [addDialogHandler, addCloseTrigger, addTrigger] = useDialog();
    const [updateDialogHandler, updateCloseTrigger, updateTrigger] = useDialog();
    const [destroyDialogHandler, destroyCloseTrigger, destroyTrigger] = useDialog();
    const [searchQuery, setSearchQuery] = useState('');

    const openUpdateDialog = (admin) => {
        setState(admin);
        updateDialogHandler();
    };

    const openDestroyDialog = (admin) => {
        setState(admin);
        destroyDialogHandler();
    };

    const destroyAdmin = () => {
        Inertia.delete(route('admins.destroy', state.id), { onSuccess: destroyCloseTrigger });
    };

    useEffect(() => {
        fetchAdmins();
    }, [searchQuery]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const fetchAdmins = async () => {
        try {
            const response = await Inertia.get(`admin?search=${searchQuery}`);
            setAdmins(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="container-fluid py-4">
            <Dialog trigger={addTrigger} title="Create New Admin">
                <CreateAdmin close={addCloseTrigger} />
            </Dialog>

            <Dialog trigger={updateTrigger} title={`Update Admin: ${state.name}`}>
                <EditAdmin model={state} close={updateCloseTrigger} />
            </Dialog>
            <Dialog trigger={destroyTrigger} title={`Delete Admin: ${state.name}`}>
                <p>Are you sure to delete this admin?</p>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="submit" onClick={destroyAdmin} className="btn bg-gradient-danger">
                        Delete
                    </button>
                </div>
            </Dialog>
            <div className="row pb-4">
                <div className="col-12 w-100">
                    <div className="card h-100 w-100">
                        <div className="card-header pb-0">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Users table</h6>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end">
                                    <button onClick={addDialogHandler} type="button" className="btn bg-gradient-success btn-block mb-3">
                                        Create New User
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-0 pb-2">
                            <div className="table-responsive-xxl p-0" width="100%">
                                <div className="d-flex justify-content-end mb-3">
                                    <input type="text" className="form-control form-control-sm" placeholder="Search" onChange={handleSearch} />
                                </div>
                                <table className="table align-items-center justify-content-center mb-0" width="100%">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">#</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Name</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 text-left">Username</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Email</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-left opacity-7 ps-2">Address</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {admins
                                            .filter((admin) => admin.name.toLowerCase().includes(searchQuery.toLowerCase()))
                                            .map((admin, index) => (
                                                <AdminTableRow
                                                    key={admin.id}
                                                    admin={admin}
                                                    index={meta.from + index}
                                                    openUpdateDialog={openUpdateDialog}
                                                    openDestroyDialog={openDestroyDialog}
                                                />
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    {meta.links.map((link, k) => (
                        <li key={k} className="page-item">
                            <Link
                                disabled={link.url == null ? true : false}
                                as="button"
                                className={`${link.active && 'bg-info'} ${link.url == null && 'btn bg-gradient-secondary text-white'
                                    } page-link`}
                                href={link.url || ''}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
Index.layout = (page) => <Base key={page} children={page} title={"Manage Admin"} />;